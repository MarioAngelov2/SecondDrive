const multer = require("multer");
const path = require("path");

const destinationPath = path.resolve(__dirname, "../../../client/public");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const qniueName = Date.now() + "_" + file.originalname;
        cb(null, qniueName);
    },
});

const upload = multer({ storage });

module.exports = upload;


