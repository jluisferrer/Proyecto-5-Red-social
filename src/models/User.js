import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        role: {
            type: String,
            enum: ["user", "admin", "super_admin"],
            default: "user"
        },
        following: [
            {
              type: Schema.Types.ObjectId,
              ref: "User",
              default: [],
            },
          ],
          followers: [
            {
              type: Schema.Types.ObjectId,
              ref: "User",
              default: [],
            },
          ],
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('User', UserSchema)
export default User