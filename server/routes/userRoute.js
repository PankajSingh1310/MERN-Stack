const express = require("express");
const { homeUser, registerUser, login } = require("../controllers/userAuthController");
const validate = require("../middlewares/userValidate");
const {signupSchema, loginSchema} = require("../validators/userAuthValidator");

// const userAuthController = require("../controllers/userAuthController");

const router = express.Router();


// all the three lines that I have commented can also be used but it is totally upto me what I want to use both ways are correct and optimal
// router.route("/").get(userAuthController.homeUser);
// router.route("/register").post(userAuthController.registerUser);


router.route("/").get(homeUser);
router.route("/register").post(validate(signupSchema), registerUser);
router.route("/login").post(validate(loginSchema), login);

module.exports = router;