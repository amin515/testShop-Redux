import multer from 'multer';


const storage = multer.diskStorage({
    destination : (req, file, cb) => {
      cb(null, 'api/public/category')
    },
    filename : (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname)
    }
})

export const categoryMulter = multer({storage}).single('category-photo')