import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        likes:[{
            type:Number,
            default: 0,
        }],
    },
    {
        timestamps: true,
        versionKey: false,
    }         
)

const Post = model('Post', PostSchema)

export default Post