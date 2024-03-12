import User from "../../models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { dbConnection } from "../../database/db.js";

const userSeeder = async () => {
    try {
        const connect = await dbConnection();
        console.log("Connected to MongoDB");

        const user = await User.create([
            {
                email: "superadmin@superadmin.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "super_admin",
                _id: new mongoose.Types.ObjectId("65ee1c44cdbdd97c799e4e70")
            },
            {
                email: "admin@admin.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "admin",
                _id: new mongoose.Types.ObjectId("65ee1c44cdbdd97c799e4e71")
            },
            {
                email: "user@user.com",
                password: bcrypt.hashSync('12345678', 10),
                role: "user",
                _id: new mongoose.Types.ObjectId("65ee1c44cdbdd97c799e4e72")
            },
        ]);

        console.log("User created");
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.disconnect();
    }
};

userSeeder();





// const userSeeder = async () => {
//     try {
//         const connect = await dbConnection();

//         const user = await User.create([
//             {
//                 email: "superadmin@superadmin.com",
//                 password: bcrypt.hashSync('123456', 10),
//                 role: "super_admin"
//             }, {
//                 email: "admin@admin.com",
//                 password: bcrypt.hashSync('123456', 10),
//                 role: "admin",
//             }, {
//                 email: "user@user.com",
//                 password: bcrypt.hashSync('123456', 10),
//             },
//         ]);
//         console.log("-------------");
//         console.log("Users created");
//         console.log("-------------");
//     } catch (error) {
//         console.log(error);
//     } finally {
//         mongoose.disconnect();
//     }
// };

// userSeeder();