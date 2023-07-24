const { Router } = require("express");
const upload = require("../utils/uploadFiles");
const getCars = require("../controllers/getCars");
const getCar = require("../controllers/getCar");
const createCar = require("../controllers/createCar");
const updateCar = require("../controllers/updateCar");
const deleteCar = require("../controllers/deleteCar");
const createUser = require("../controllers/register");
const loginUser = require("../controllers/login");
const authenticatedUser = require("../controllers/auth");
const logout = require("../controllers/logout");

const router = Router();

router.get("/", authenticatedUser);

router.post("/signup", createUser);

router.post("/login", loginUser);

router.get("/logout", logout);

router.get("/", getCars);

router.post("/", upload.single("image"), createCar);

router.get("/:id", getCar);

router.patch("/:id", upload.single("image"), updateCar);

router.delete("/:id", deleteCar);

module.exports = router;
