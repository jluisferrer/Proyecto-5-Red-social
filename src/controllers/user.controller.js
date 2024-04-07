import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
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

        if (!userId) {
            res.status(400).json({
                success: false,
                message: "User token required"
            })
        }
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

        if (!userId) {
            res.status(400).json({
                success: false,
                message: "User token required"
            })
        }
        if (!updateData) {
            return res.status(400).json(
                {
                    success: false,
                    message: "No changes detected. User cant be updated",
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

        if (!userId) {
            res.status(400).json({
                success: false,
                message: "User ID is required"
            })
        }
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
export const FollowUnfollowUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const ownUserId = req.tokenData.userId;
        const findUserId = await User.findById(userId);

        if (!findUserId) {
            throw new Error('User not found');
        }
        const findUserIdToFollow = await User.findOne({
            _id: userId,
            followers: ownUserId
        });

        const findMyUserIdToFollowing = await User.findOne({
            _id: ownUserId
        });
        if (!findUserIdToFollow) {
            findUserId.followers.push(ownUserId);
            findMyUserIdToFollowing.following.push(userId);
            await Promise.all([findUserId.save(), findMyUserIdToFollowing.save()]);
            return res.status(201).json({
                success: true,
                message: "User Followed Successfully"
            });
        } else {
            findUserId.followers = findUserId.followers.filter(follower => follower.toString() !== ownUserId);
            findMyUserIdToFollowing.following = findMyUserIdToFollowing.following.filter(following => following.toString() !== userId);
            await Promise.all([findUserId.save(), findMyUserIdToFollowing.save()]);
            return res.status(201).json({
                success: true,
                message: "User UnFollowed Successfully"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User not found",
            error: error
        })
    }
}