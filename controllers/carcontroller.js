// const path = require ('path');
// const Car = require('../models/Car');

// exports.crearCar = async (req, res ) =>{
//     try{
//         let car;
//         // we create car
//         const {name, brand,model,category, characteristics,motor, price} = req.body;
//         const newCar = {name, brand,model,category, characteristics,motor, price , importFile:  req.file.path}
//         car = new Car(newCar);
//         await car.save();
//         res.send(car);
//         console.log(car)
        
//     }catch(error){
//         console.log(error);
//         res.status(500).send('There was a mistake')

//     }
// }
// exports.getCar = async (req,res) =>{
//     try{ const cars = await Car.find();
//         res.json(cars)
       
//     } catch(error){
//         console.log(error);
//         res.status(500).send('There was a mistake')
//     }
// }

// exports.updateCar = async (req,res) =>{
//     try{ 
//         const {name, brand, model, category, characteristics, motor, price,   importFile}= req.body;
//         let car = await Car.findById(req.params.id);
//         if(!car){
//             res.status(404).json({msg:'Does not exist'});
//         }
//         car.name = name,
//         car.brand = brand,
//         car.model =  model,
//         car.category = category,
//         car.characteristics = characteristics,
//         car.motor = motor,
//         car.price = price,
//         car.importFile = importFile,

//         car = await Car.findByIdAndUpdate({_id: req.params.id}, car, {new:true})
//         res.json(car);
        
//     } catch(error){
//         console.log(error);
//         res.status(500).send('There was a mistake')
//     }
// }

// exports.getOneCar = async (req, res) => {
//     try{
//         let car = await Car.findById(req.params.id);
//         if(!car){
//             res.status(404).json({msg:'Does not exist'});
//         }
//         res.json(car);

//     }catch(error){
//         console.log(error);
//         res.status(500).send('There was a mistake')
//     }

// }

// exports.deleteCar = async (req, res) => {
//     try{
//         let car = await Car.findById(req.params.id);
//         if(!car){
//             res.status(404).json({msg:'Does not exist'});
//         }
//         await Car.findOneAndRemove({_id: req.params.id})
//         res.json({msg:'Car removed successfully'});

//     }catch(error){
//         console.log(error);
//         res.status(500).send('There was a mistake')
//     }

// }