const mongoose = require("mongoose");
const CarsModel = require("../models/Cars");
const createHttpError = require("http-errors");

const getCars = async (req, res, next) => {
    try {
        const cars = await CarsModel.find({}).exec();
        res.status(200).json(cars);
    } catch (error) {
        next(error)
    }
}

module.exports = getCars;