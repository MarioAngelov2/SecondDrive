require("dotenv/config");
const express = require("express");
const createHttpError = require("http-errors");
const cors = require("cors");
const db = require("./models/index");
const router = require("./routes/cars");
const session = require("express-session");
const MongoStore = require("connect-mongo");

start();

async function start() {
    db();

    const app = express();
    const port = process.env.PORT || 5002;

    app.use(cors());
    app.use(express.json());

    // app.use(
    //     session({
    //         secret: 'some.secret.key',
    //         resave: false,
    //         saveUninitialized: false,
    //         cookie: {
    //             maxAge: 60 * 60 * 1000,
    //             sameSite: "lax",
    //             httpOnly: true,
    //         },
    //         rolling: true,
    //         store: MongoStore.create({
    //             mongoUrl: process.env.MONGO_CONNECT_STRING,
    //         }),
    //     })
    // );

    app.use("/", router);

    app.use((req, res, next) => {
        next(createHttpError(404, "Endpoint not found."));
    });

    app.use((err, req, res, next) => {
        console.log(err);
        let errorMessage = "An unknown error occurred.";
        let statusCode = 500;
        if (createHttpError.isHttpError(err)) {
            statusCode = err.statusCode;
            errorMessage = err.message;
        }
        res.status(statusCode).json({ error: errorMessage });
    });

    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}
