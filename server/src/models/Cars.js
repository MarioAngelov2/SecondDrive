const { Schema, model, Types } = require("mongoose");

const carsSchema = new Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String },
        engine: { type: String },
        mileage: { type: Number },
        location: { type: String, required: true },
        image: { type: String, required: false },
        userOwner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const Car = model("Car", carsSchema);

module.exports = Car;
