import * as userModel from "../models/userModel.js";

export const createUser = async (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: "Please provide name and email" });
    }
    try {
        const user = await userModel.createUser(name, email);
        res.status(201).json(user);
    } catch (error) {
        next(error)
    }
}


export const getAllUsers = async (req, res, next) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error)
    }
}


export const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await userModel.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { name, email } = req.body;
    if (!name && !email) {
        return res.status(400).json({ message: "Please provide at least name or email" });
    }
    try {
        // Check if user exists
        const userExists = await userModel.getUserById(id);
        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }
        const user = await userModel.updateUser(name, email, id);
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await userModel.deleteUser(id);
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}
