const mongoose = require("mongoose");
const CarsModel = require("../models/Cars");
const createHttpError = require("http-errors");

const updateCar = async (req, res, next) => {
    const id = req.params.id;
    const newTitle = req.body.title;
    const newPrice = req.body.price;
    const newDescription = req.body.description;
    const newEngine = req.body.engine;
    const newMileage = req.body.mileage;
    const newLocation = req.body.location;

    const newImage = req.file ? req.file.filename : null;

    try {
        const car = await CarsModel.findById(id).exec();

        if (!car) {
            throw createHttpError(404, "Car not found");
        }

        if (!newTitle || !newPrice || !newLocation) {
            throw createHttpError(400, "Ivalid title, price or location.");
        }

        if (newPrice < 0 || newPrice >= 1000000) {
            throw createHttpError(400, "Invalid price");
        }

        car.title = newTitle;
        car.price = newPrice;
        car.description = newDescription;
        car.engine = newEngine;
        car.mileage = newMileage;
        car.location = newLocation;
        car.image = newImage;

        const updatedCar = await car.save();
        res.status(200).json(updatedCar);
    } catch (error) {
        next(error)
    }
}