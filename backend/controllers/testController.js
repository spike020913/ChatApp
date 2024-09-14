export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});

        
        const isPasswordMatched = await bcrypt.compare(password, user?.password || "");

        if (!user) {
            console.log("User does not exist!");
            return res.status(400).json({ message: "User does not exist!" });
        }

        if (!isPasswordMatched) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Error in login" });
    }
}