const multer  = require('multer')

const path = require ('path');

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, path.join(__dirname,'../public'))
},
    filename:(req, file, cb)=> {
        
        cb(null,`${file.originalname.split('.')[0]}-${Date.now()}.${file.mimetype.split('/')[1]}`)
    },
    fileFilter:(req,file,cb)=>{
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null,true);
        }
        cb("The file must be an image");
    },
    limits:{fileSize:1000000}
});
module.exports = storage