const mongoose = require("mongoose");

const connectionString =
    process.env.MONGO_CONNECT_STRING ||
    "mongodb+srv://MarioAngelov:Mario1234@cluster0.slyrubd.mongodb.net/?retryWrites=true&w=majority";

async function init() {
    try {
        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");

        mongoose.connection.on("error", (err) => {
            console.error("Database error");
            console.log(err);
        });
    } catch (error) {
        console.error("Error connecting to database");
        process.exit(1);
    }
}

module.exports = init;
