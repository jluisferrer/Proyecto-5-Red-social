import Post from "../models/Post.js";


export const newPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const description = req.body.description.trim()

        if (!userId) {
            res.status(400).json({
                success: false,
                message: "User token required"
            })
        }
        if (!description) {
            return res.status(400).json(
                {
                    success: false,
                    message: "The post requires content"
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
            message: "Post cant be created",
            error: error
        })
    }
}

export const deletePostById = async (req, res) => {
    try {
        const postId = req.params.id
        const deletedPost = await Post.findOneAndDelete(postId)

        if (!postId) {
            res.status(400).json({
                success: false,
                message: "The post is not found"
            })
        }
        res.status(201).json({
            success: true,
            message: "Post successfully deleted",
            data: deletedPost
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post cant be deleted",
            error: error
        })
    }
}

export const updatePostById = async (req, res) => {
    try {
        const postId = req.params.id
        const newDescription = req.body.description

        if (!postId) {
            res.status(400).json({
                success: false,
                message: "The post is not found"
            })
        }
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
        const posts = await Post.find({ userId }).select('description')

        if (!userId) {
            res.status(400).json({
                success: false,
                message: "User token required"
            })
        }
        if (!posts) {
            res.status(400).json({
                success: false,
                message: "Posts cant found"
            })
        }
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

        if (!findPosts) {
            res.status(400).json({
                success: false,
                message: "The post is not found"
            })
        }
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
        const postsById = await Post.findById(postsId).select('description')

        if (!postsId || !postsById) {
            res.status(400).json({
                success: false,
                message: "The post is not found"
            })
        }
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

        if (!userId) {
            res.status(400).json({
                success: false,
                message: "User is not found"
            })
        }
        if (!posts) {
            res.status(400).json({
                success: false,
                message: "The post is not found"
            })
        }
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

export const likePost = async (req, res) => {
    try {
        const userId = req.tokenData.userId     //Extraemos Id del usuario desde el token
        const postId = req.params.id            //Extraemos Id del post desde los parametros desde la URL

        const findPost = await Post.findById({ //Buscamos el post con el Id seleccionado en el modelo Post
            _id: postId
        })
        //Devolvemos mensaje de error si no se encuentra el post 
        if (!findPost) {                                              
          return  res.status(500).json(
                {
                    success: false,
                    message: "Post cant found",
                    error: error
                })
        }
         //Buscamos si el usuario a dado like al post con el id del post y el id del user
        const findUser = await Post.findOne({ 
            _id: postId,
            likes: userId
        })
         //Si no se encuentra el usuario agrega su Id a la lista de likes del psot y guardamos
        if (!findUser) {                       
            findPost.likes.push(userId)
            await findPost.save();
            return res.status(201).json({
                success: true,
                message: "Post like succesfully",
            })
        }
        if (findUser) {
            findUser.likes.includes(userId)
            if(findUser.likes.includes(userId)){
            //
            }
        //El bucle for contunuara mientras i sea menor que la longitud de la matriz `likes`del objeto findPost
            for (let i = 0; i < findPost.likes.length; i++) {   
        // En cada iteración del bucle, se comprueba si el elemento en la posición i de la matriz likes de findPost es igual al ID de usuario (userId).
        // Para asegurarse de que se comparen como Strings, el userId se convierte en una String mediante ${userId} y se compara con el resultado de findPost.likes[i].toString().               
                if (findPost.likes[i].toString() === `${userId}`) {
        // Si el ID del usuario se encuentra en likes se utiliza splice para eliminar el elemento de la matriz
                    findPost.likes.splice(i, 1) 
        // Despues de modificar likes se guarda el documento findPOst esperando a que la promesa se resuelva antes con el await
                    await findPost.save();
                }
            }
            return res.status(201).json({
                success: true,
                message: "Post remove from like succesfully",
            })
        }
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Post cant found",
                error: error
            })
    }
}