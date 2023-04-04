
import multer from 'multer';


const storage = multer.diskStorage({
    destination : (req, file, cb) => {
      cb(null, 'api/public/brand')
    },
    filename : (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname)
    }
})

export const brandMulter = multer({storage}).single('brand-photo')