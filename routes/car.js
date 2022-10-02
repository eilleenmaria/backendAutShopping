const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const multer = require('multer');
const storage = require('../config/multer');


const uploader = multer({
    storage}).single('file')

router.post('/car', uploader, async(req, res)=>{
    const {body, file} = req
    if(file && body){
        const car = new Car({
            name: body.name,
            brand: body.brand,
            model: body.model,
            category:body.category,
            characteristics: body.characteristics,
            motor:body.motor,
            price: body.price,
            file: file.filename,
        })
        await car.save()
        console.log(car)
        res.json({ car:Car})
    }

  })
router.get('/view', async(req, res)=>{
    const cars = await Car.find()
    res.json(cars)
})
router.delete('/delete/:id', async(req,res) =>{
    let car = await Car.findById(req.params.id);
        if(!car){
            res.status(404).json({msg:'Does not exist'});
        }
        await Car.findOneAndRemove({_id: req.params.id})
        res.json({msg:'Car removed successfully'});
})
router.put('/update/:id', uploader, async(req, res) =>{
   
    try{
        const {name, brand, model, category, characteristics, motor, price,file} = req.body 
        // const {file} =req.params.file
        let car = await Car.findById(req.params.id);
            if(!car){
                res.status(404).json({msg:'Does not exist'});
            }
            car.name = name,
            car.brand = brand,
            car.model =  model,
            car.category = category,
            car.characteristics = characteristics,
            car.motor = motor,
            car.price = price,
            car.file = file
    
            car = await Car.findByIdAndUpdate({_id: req.params.id}, car, {new:true})
            res.json(car);
            
        } catch(error){
            console.log(error);
            res.status(500).send('There was a mistake')
        }
    })  
     
router.get('/onecar/:id', async (req,res)=>{
    try{
        let car = await Car.findById(req.params.id);
         if(!car){
            res.status(404).json({msg:'Does not exist'});
        }
        res.json(car);
        
        }catch(error){
        console.log(error);
        res.status(500).send('There was a mistake')
        }
})

module.exports = router