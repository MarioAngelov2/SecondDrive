const { Router } = require("express");
const upload = require("../utils/uploadFiles");
const getCars = require("../controllers/getCars");
const getCar = require("../controllers/getCar");
const createCar = require("../controllers/createCar");
const updateCar = require("../controllers/updateCar");
const deleteCar = require("../controllers/deleteCar");
const createUser = require("../controllers/register");
const loginUser = require("../controllers/login");

const router = Router();

router.get("/login", loginUser);

router.post("/signup", createUser);

router.get("/", getCars);

router.post("/", upload.single("image"), createCar);

router.get("/:id", getCar);

router.patch("/:id", upload.single("image"), updateCar);

router.delete("/:id", deleteCar);

module.exports = router;
