const mongoose = require("mongoose");
const CarsModel = require("../models/Cars");
const createHttpError = require("http-errors");

const createCar = async (req, res, next) => {
    const { title, price, description, engine, mileage, location, userOwner } = req.body;

    const image = req.file.filename;

    try {
        if (!title || !price || !location) {
            throw createHttpError(400, "Ivalid title, price or location.");
        }

        if (price < 0 && price < 1000000) {
            throw createHttpError(400, "Invalid price");
        }

        const userOwner = req.user.id

        const newCar = new CarsModel({
            title,
            price,
            description, 
            engine,
            mileage,
            location,
            image,
            userOwner
        });

        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        next(error);
    }
};

module.exports = createCar;
