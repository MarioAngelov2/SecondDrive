const { model, Schema, Types } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        select: false,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    carsID: [{ type: Schema.Types.ObjectId, ref: "Car" }],
});

const User = model("User", userSchema);

module.exports = User;
