import Post from "../models/Post.js";

export const newPost = async (req, res)=>{
    try {
        const userId = req.tokenData.userId
        const description = req.body.description.trim()

        if(!description){
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