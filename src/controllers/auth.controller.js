import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { isValidMail } from "../helper/mailValidation.js";
import { isValidPassword } from "../helper/passwordValidation.js";

export const register = async (req, res) => {
	try {
		const { username, email, password } = req.body


		if (!username || !email || !password) {
			return res.status(400).json({
				success: false,
				message: "All fields are required"
			})
		}
		//Validamos email y password
		const validMail = isValidMail(email);
		const validPassword = isValidPassword(password);

		if (!validMail || !validPassword) {
			return res.status(400).json({
				success: false,
				message: "Format email or password invalid"
			})
		}
		//creamos nuevo usuario con username, mail y password.
		const newUser = await User.create({
			username,
			email,
			password
		})
		res.status(201).json({
			success: true,
			message: "User registered succesfully",
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "User cant be registered",
			error: error
		})
	}
}

export const login = async (req, res) => {
	try {
		const { email, password } = req.body; //Validamos body
		if (!email || !password) {
			 res.status(400).json({
				success: false,
				message: "Email and password are required"
			})
		}
		const validEmail = isValidMail(email)
		const validPassword = isValidPassword(password)

		if (!validPassword || !validEmail) {
			res.status(400).json({
				success: false,
				message: "Email or password invalid"
			})
		}
		const user = await User.findOne({ email: email })

		if (!user) {
			 res.status(400).json({
				success: false,
				message: "Not find user"
			})
		}
		//creamos token
		const token = jwt.sign(
			{
				userId: user._id,
				roleName: user.role
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "200h"
			}
		)
		res.status(201).json({
			success: true,
			message: "User login succesfully",
			token: token
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "User cant be login",
			error: error
		})
	}
}