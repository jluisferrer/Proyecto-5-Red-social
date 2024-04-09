import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required:true,
        },
        title: {
            type: String,
            required: true,
        },       
        description:{
            type:String,
            required:true,
        },
        likes:[{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    {
        timestamps: true,
        versionKey: false,
    }         
)

const Post = model('Post', PostSchema)
export default Post