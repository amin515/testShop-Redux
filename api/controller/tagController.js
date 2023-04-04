import { createSlug } from "../helper/createSlug.js";
import Tag from "../models/tagModels.js";
import createError from "../utility/customError/createError.js";

/**
 * @status get
 * @ get all categories
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const getAllTag = async (req, res, next) => {
  try {
    const data = await Tag.find();

    if (data) {
      res.status(200).json({
        tag: data,
        message: "get all brand successful",
      });
    }

    if (!data) {
      res.status(400).json({
        message: "no data found",
      });
    }
  } catch (error) {
    next(error.message)
  }
};

/**@status post
 * @ create category
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const createTag = async (req, res, next) => {
  try {
    const { name } = req.body;

    const data = await Tag.create({
      name,
      slug: createSlug(name),
    });
    res.status(200).json({
      tag: data,
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
export const getOneTag = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const data = await Tag.findOne({ slug });
    res.status(200).json({
      tag: data,
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

export const updateTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Tag.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );
    res.status(200).json({
      tag: data,
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

export const updateMultipleTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;
    const data = await Brand.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );
    res.status(200).json({
      tag: data,
    });
  } catch (error) {
    next(createError(400, 'No data found for update'))
  }
};

export const deleteTag = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      tag: data,
      message: `${`successfuly delete ${data.name}`}`,
    });
  } catch (error) {
    next(createError(400, "user not found"));
  }
};
