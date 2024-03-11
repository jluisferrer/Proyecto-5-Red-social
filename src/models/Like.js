import { Schema, model } from "mongoose";

const LikeSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        postId:{
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true, 
        },
    },
    {
        timestamps: false,
        versionKey: false
    }
)

const Like= model('Like', LikeSchema)
export default Like