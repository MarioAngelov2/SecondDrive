const { Router } = require("express");
const createUser = require("../controllers/register");
const loginUser = require("../controllers/login");
const authenticatedUser = require("../controllers/auth");
const logout = require("../controllers/logout");

const router = Router();

router.get("/", authenticatedUser);

router.post("/signup", createUser);

router.post("/login", loginUser);

router.get("/logout", logout);

module.exports = router;
