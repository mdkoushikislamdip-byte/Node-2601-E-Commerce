const { createCategory, getAllCategories } = require("../controllers/categoryController");
const { roleCheck, authMiddleware } = require("../middleware/authMiddleware");


const route = require("express").Router();

route.post("/create", authMiddleware, roleCheck(["admin"]), createCategory);
route.get("/all", getAllCategories);
module.exports = route;