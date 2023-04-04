import express from "express";
import dotenv from "dotenv";
import color from "colors";
import cors from "cors";
import connectMongoDB from "./config/db.js";
import path from 'path';
import catRouter from './router/catRouter.js';
import brandRouter from './router/brandRouter.js';
import tagRouter from './router/tagRouter.js';
import productRouter from './router/productRouter.js';
import errorHandler from './helper/errorHandler.js'
const __dirname = path.resolve();
// express init
const app = express();

// env configuration
dotenv.config();

// port declation
const PORT = process.env.SERVER_PORT || 9090;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initial cors
app.use(cors());


// error handler
app.use(errorHandler);

// static folder
app.use(express.static(path.join(__dirname, "api/public")));



// router get
app.use('/api/v1/product', productRouter)
app.use('/api/v1/product', catRouter, brandRouter, tagRouter)




// app listener
app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server running on port ${PORT}`.bgMagenta.black);
});
