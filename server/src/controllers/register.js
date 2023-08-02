const UserModel = require("../models/User");
const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            throw createHttpError(
                400,
                "Username, email or password are missing"
            );
        }

        const existingUser = await UserModel.findOne({ email: email }).exec();

        if (existingUser) {
            throw createHttpError(
                409,
                "The user already exist. Please log in."
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            username: username,
            email: email,
            password: hashedPassword,
        });

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

module.exports = createUser;
