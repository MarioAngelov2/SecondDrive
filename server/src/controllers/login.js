const UserModel = require("../models/User");
const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");

const loginUser = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            throw createHttpError(400, "Parameters missing");
        }

        const user = await UserModel.findOne({ usernme: username }).select(
            "+password +email"
        );

        if (!user) {
            throw createHttpError(401, "Ivalid credentials");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw createHttpError(401, "Invalid credentials");
        }

        req.session.userId = user._id;
        req.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
};

module.exports = loginUser;
 