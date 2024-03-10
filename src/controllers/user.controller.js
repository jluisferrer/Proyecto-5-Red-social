import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        // const page = req.query.page || 1
        // const limit = 2
        // const usersDisplay = await User.find().skip((Number(page) - 1) * limit).limit(limit)

        res.status(200).json({
            success: true,
            message: `Total of ${users.length} users found.`,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Users cant be retrieved",
            error: error
        })
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const user = await User.findById(userId)

        res.status(200).json({
            success: true,
            message: "User retrieved succesfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be retrieved",
            error: error
        })
    }
}

export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const updateData = req.body
        const newUser = await User.findByIdAndUpdate(userId, updateData, { new: true })

        if (!updateData) {
            return res.status(400).json(
                {
                    success: true,
                    message: "No changes detected. User cannot be updated",
                }
            )
        }

        res.status(200).json({
            success: true,
            message: "User updated succesfully",
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be retrieved",
            error: error
        })
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id

        const userDeleted = await User.findByIdAndDelete(userId)

        res.status(200).json({
            success: true,
            message: "User deleted succesfully",
            data: userDeleted
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be deleted",
            error: error
        })
    }
}
