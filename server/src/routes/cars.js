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
const requiresAuth = require("../middleware/isAuthenticated");

const router = Router();

// Public routes that don't require authentication
router.get("/", getCars);
router.get("/:id", getCar);

router.post("/create", upload.single("image"), createCar);
router.patch("/update/:id", upload.single("image"), updateCar);
router.delete("/:id", deleteCar);

module.exports = router;
