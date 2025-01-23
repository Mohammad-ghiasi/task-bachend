const express = require("express");

const { signup, users, login, updateUsers, deleteUser } = require("../controllers/userController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/updateUsers/:userId", updateUsers);
router.get("/users", users);
router.delete("/delete/:userId", deleteUser);

module.exports = router;
