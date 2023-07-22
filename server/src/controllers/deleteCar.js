const mongoose = require("mongoose");
const CarsModel = require("../models/Cars");
const createHttpError = require("http-errors");

const deleteCar = async (req, res, next) => {
    const id = req.params.id;

    try {
        if (!mongoose.isValidObjectId(id)) {
            throw createHttpError(400, "Invalid car id");
        }

        await CarsModel.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

module.exports = deleteCar;