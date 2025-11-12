import express from "express";
import * as userController from "../controllers/userController.js";
import { validateCreateUser, validateUpdateUser } from "../middlewares/inputValidator.js";

const router = express.Router();

router.get("/users", userController.getAllUsers)
router.get("/users/:id", userController.getUserById)
router.post("/users", validateCreateUser, userController.createUser)
router.put("/users/:id", validateUpdateUser, userController.updateUser)
router.delete("/users/:id", userController.deleteUser)

export default router;
