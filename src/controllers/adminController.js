const { doesUserExist, getHashedPassword, createNewUser, generateToken, findUserByEmail, comparePassword } = require("../services/adminService");

const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await doesUserExist(email);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashPassword = await getHashedPassword(password)
        const newUser = await createNewUser(email, hashPassword, username);
        const token = await generateToken(newUser);
        res.status(201).json({ user: newUser, token: token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" });
    }

}

const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExist = await doesUserExist(email);
        if (!userExist) {
            return res.status(404).json({ message: "User doesn't exist" })
        }
        const existingUser = await findUserByEmail(email);
        const matchPassword = await comparePassword(password, existingUser.password)
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const token = await generateToken(existingUser)
        res.status(200).json({ user: existingUser, token: token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = {
    signUp, signIn
} 