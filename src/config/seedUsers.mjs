import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/Users.mjs";

dotenv.config()

const seedUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        await User.deleteMany();
        
        const user = await User.create({
            name: "adolf hitler",
            email: "adolfHitler@gmail.com"
        });
        console.log("Demo user created successfully: ", user._id);
        process.exit();
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

seedUsers()