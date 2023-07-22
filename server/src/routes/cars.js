const { Router } = require("express");
const upload = require('../utils/uploadFiles')
const getCars = require("../controllers/getCars");
const getCar = require("../controllers/getCar");
const createCar = require("../controllers/createCar");
const updateCar = require("../controllers/updateCar");
const deleteCar = require("../controllers/deleteCar");

const router = Router();

router.get("/", getCars);

router.post("/", upload.single("image"), createCar);

router.get("/:id", getCar);

router.patch("/edit/:id", upload.single("image"), updateCar);

router.delete("/:id", deleteCar);

module.exports = router;
