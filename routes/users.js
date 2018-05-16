const express = require("express");
const router = express.Router();

const user = require("../controllers/user");

// Get all users
router.get("/", user.list);

// Get single user detail
router.get("/detail/:id", user.detail);

// Save user
router.post("/user", user.create);

// Edit or create a user
router.get("/user/:id?", user.edit);

router.put("/user/:id?", user.update);

router.delete("/user/:id", user.delete);

module.exports = router;