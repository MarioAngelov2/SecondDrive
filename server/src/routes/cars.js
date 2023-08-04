const { Router } = require("express");
const upload = require("../utils/uploadFiles");
const getCars = require("../controllers/getCars");
const getCar = require("../controllers/getCar");
const createCar = require("../controllers/createCar");
const updateCar = require("../controllers/updateCar");
const deleteCar = require("../controllers/deleteCar");
const createUser = require("../controllers/register");
const loginUser = require("../controllers/login");
const logout = require("../controllers/logout");
const authenticate = require("../controllers/auth");
const favorite = require("../controllers/favoriteCar");
const favoriteCars = require("../controllers/favoriteCars");

const router = Router();

// Public routes that don't require authentication
router.get("/", getCars);
router.get("/:id", getCar);

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/logout", logout);

router.post("/create", authenticate, upload.single("image"), createCar);
router.put("/favorite", authenticate, favorite);
router.get("/favoriteCars/ids", favoriteCars);
router.get("/favoriteCars", )
router.patch("/update/:id", upload.single("image"), updateCar);
router.delete("/:id", deleteCar);

module.exports = router;
