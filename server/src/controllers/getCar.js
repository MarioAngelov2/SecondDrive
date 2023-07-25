const mongoose = require("mongoose");
const CarsModel = require("../models/Cars");
const createHttpError = require("http-errors");

const getCar = async (req, res, next) => {
    const id = req.params.id;

    try {
        if (!mongoose.isValidObjectId) {
            throw createHttpError(400, "Invalid car id");
        }

        const car = await CarsModel.findById(id).exec();

        if (!car) {
            throw createHttpError(404, "Car not found");
        }

        res.status(200).json(car);
    } catch (error) {
        next(error)
    }
};

module.exports = getCar; 