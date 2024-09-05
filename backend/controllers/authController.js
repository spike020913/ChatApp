import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        console.log(password);
        
        const user = await User.findOne({userName});

        console.log(user);
        const isPasswordMatched = await bcrypt.compare(password, user?.password || "");

        if (!user) {
            return res.status(400).json({ message: "User does not exist!" });
        }

        if (!isPasswordMatched) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Error in login" });
    }
}

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password not matched" });
        }

        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        } 

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyPfp = `https://avatar.iran.liara.run/public/boy?username=${ userName }`;
        const girlPfp = `https://avatar.iran.liara.run/public/girl?username=${ userName }`;

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyPfp : girlPfp,
        });

        if (newUser) {
            await generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic,
                password: newUser.password,
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
        
        
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server went wrong" });
    }
}

export const logout = async (req, res) => {  
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal server went wrong" });
    }
}
