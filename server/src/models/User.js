const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    usernme: {
        type: String,
        reqired: true,
        unique: true,
    },
    email: {
        type: String,
        reqired: true,
        select: false,
        unique: true,
    },
    password: {
        type: String,
        reqired: true,
        select: false,
    },
});

const User = model("User", UserSchema);

module.exports = User;
