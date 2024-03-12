import Post from "../models/Post.js";


export const newPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const description = req.body.description.trim()

        if (!description) {
            return res.status(400).json(
                {
                    success: false,
                    message: "The post requires content",
                }
            )
        }
        const postNew = await Post.create({
            userId,
            description
        })
        res.status(201).json({
            success: true,
            message: "New post succesfully",
            token: postNew
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post could not be created",
            error: error
        })

    }
}

export const deletePostById = async (req, res) => {
    try {
        const postId = req.params.id
        const deletedPost = await Post.findOneAndDelete(postId)
        res.status(201).json({
            success: true,
            message: "Post successfully deleted",
            token: deletedPost
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post could not be deleted",
            error: error
        })
    }
}

export const updatePostById = async (req, res) => {
    try {
        const postId = req.params.id
        const newDescription = req.body.description

        if (!newDescription) {
            res.status(400).json({
                success: false,
                message: "There are no changes to the post"
            })
        }
        const modifiedPost = await Post.findByIdAndUpdate
            (postId,
                {
                    description: newDescription,
                },
                {
                    new: true
                })

        res.status(201).json({
            success: true,
            message: "Post successfully updated",
            data: modifiedPost
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "The post is not found",
            error: error
        })
    }
}

export const getOwnPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const posts = await Post.find({ userId })

        res.status(201).json(
            {
                success: true,
                message: "User posts retrieved successfully",
                data: posts
            }
        );
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "User posts cant retrieved",
                error: error
            })
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const findPosts = await Post.find()
        res.status(201).json(
            {
                success: true,
                message: "Posts retrieved successfully",
                data: findPosts
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Posts cant retrieved",
                error: error
            })
    }
}

export const getPostsById = async (req, res) => {
    try {
        const postsId = req.params.id
        const postsById = await Post.findById({
            _id: postsId
        })
        res.status(201).json(
            {
                success: true,
                message: "Posts retrieved successfully",
                data: postsById
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Posts cant retrieved",
                error: error
            })
    }
}

export const getPostsByUserId = async (req, res) => {
    try {
        const userId = req.params.userId
        const posts = await Post.find({ userId }).select('description').select('userId');

        res.status(201).json(
            {
                success: true,
                message: "Users posts retrieved successfully",
                data: posts,
            })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Users posts cant retrieved",
                error: error
            })
    }
}

