const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    first_name: {
        type: String,
        reqired: true,
    },
    last_name: {
        type: String,
        reqired: true,
    },
    email: {
        type: String,
        reqired: true,
    },
    password: {
        type: String,
        reqired: true,
    },
});

const User = new model("User", UserSchema);

module.exports = User;
