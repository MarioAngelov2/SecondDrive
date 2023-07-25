const UserModel = require("../models/User");
const createHttpError = require("http-errors");

const getAuthenticatedUserId = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    try {
        if (!authenticatedUserId) {
            throw createHttpError(401, "User not authenticated");
        }

        const user = await UserModel.findById(authenticatedUserId)
            .select("+username")
            .exec();

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = getAuthenticatedUserId;
