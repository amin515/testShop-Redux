import { createSlug } from "../helper/createSlug.js";
import Brand from "../models/brandModels.js";
import createError from "../utility/customError/createError.js";

/**
 * @status get
 * @ get all categories
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const getAllBrand = async (req, res, next) => {
  try {
    const data = await Brand.find();

    if (data) {
      res.status(200).json({
        brand: data,
        message: "get all brand successful",
      });
    }

    if (!data) {
      res.status(400).json({
        message: "no data found",
      });
    }
  } catch (error) {
    console.log(next(error.message));
  }
};

/**@status post
 * @ create category
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const createBrand = async (req, res, next) => {
  try {
    const { name, slug } = req.body;

    const data = await Brand.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      brand: data,
      message: "Brand added successful",
    });
  } catch (error) {
    next(error);
  }
};
/**
 * @get single category
 * @status get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getOneBrand = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const data = await Brand.findOne({ slug });
    res.status(200).json({
      brand: data,
    });
  } catch (error) {
    console.log(next(error));
  }
};

/**
 * @ edit single data
 * @status put
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;
    console.log(photo);
    const data = await Brand.findByIdAndUpdate(
      id,
      { name, slug: createSlug(name)},
      {
        new: true,
      }
    );
    res.status(200).json({
      brand: data,
    });
  } catch (error) {
    console.log(next(error.message));
  }
};

/**@edit multiple data
 * @status patch
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateMultipleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;
   
    const brand = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        photo: req.file.filename ? req.file.filename : photo,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      brand,
    });
  } catch (error) {
    console.log(next(error.message));
  }
};

/**
 * delete brand
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      brand: data,
      message: `${`successfuly delete ${data.name}`}`,
    });
  } catch (error) {
    next(createError(400, "user not found"));
  }
};

/**
 * update status
 */

export const updateStatusBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const brand = await Brand.findByIdAndUpdate(
      id,
      { status },
      {
        new: true,
      }
    );
    res.status(200).json({
      brand,
      msg: "Update brand status successful",
    });
  } catch (error) {
    console.log(next(error.message));
  }
};
