const UserModel = require("../models/User");
const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
    console.log(req.body);
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
            usernme: username,
            email: email,
            password: hashedPassword,
        });

        req.session.userId = newUser._id

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
    }
};

module.exports = createUser;
