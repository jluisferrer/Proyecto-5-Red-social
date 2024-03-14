import User from "../../models/User.js";
import Post from "../../models/Post.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "dotenv/config"
import { dbConnection } from "../db.js";

const userSeeder = async () => {
    try {
        await dbConnection();
        console.log("Connected");

        const user = await User.create([
            {   username: "Superadmin",
                _id: new mongoose.Types.ObjectId("65f1d1a452bdb6b863bc15a3"),
                email: "superadmin@superadmin.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "super_admin"
            },
            {   
                username: "Admin",
                _id: new mongoose.Types.ObjectId("65f1d1f552bdb6b863bc15a6"),
                email: "admin@admin.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "admin"
            },
            {   
                username: "User",
                _id: new mongoose.Types.ObjectId("65f1de4dc759c3f870141b84"),
                email: "user@user.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "user"
            },
        ]);

        console.log("User created");
    } catch (error) {
        console.log(error);
    } 
};

const postSeeder = async () => {
    try {
        const post = await Post.create([
            {
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                userId: new mongoose.Types.ObjectId("65f1d1a452bdb6b863bc15a3"),
            },
            {
                description: "In hac habitasse platea dictumst",
                userId: new mongoose.Types.ObjectId("65f1d1f552bdb6b863bc15a6"),
            },
            {

                description: "Blablablablalbla blablabla",
                userId: new mongoose.Types.ObjectId("65f1de4dc759c3f870141b84"),
            },
        ]);
        console.log("Posts created");
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.disconnect();
    }
};

const executeSeeders = async () => {
	await userSeeder();
	await postSeeder();

}
executeSeeders()
