const { Router } = require("express");
const CarsController = require("../controllers/Cars");
const upload = require("../utils/uploadFile");

const router = Router();

router.get("/", CarsController.getCars);

router.post("/", upload.single("image"), CarsController.createCar);

router.get("/:id", CarsController.getCarById);

router.patch("/edit/:id", upload.single("image"), CarsController.updateCar);

router.delete("/:id", CarsController.deleteCar);

module.exports = router;
