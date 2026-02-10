import dotenv from "dotenv";
import mongoose from "mongoose";
import Plan from "../models/Plan.mjs";

dotenv.config()

const plans = [
    {
        name: "1 Month",
        price: 199,
        durationInDays: 30
    },
    {
        name: "3 Month",
        price: 499,
        durationInDays: 90
    },
    {
        name: "6 Month",
        price: 899,
        durationInDays: 180
    },
    {
        name: "1 Year",
        price: 1499,
        durationInDays: 365
    },
    {
        name: "Lifetime",
        price: 29999,
        durationInDays: 36500
    },

];

const seedPlans = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        tls: true,
        tlsAllowInvalidCertificates: true,
        serverSelectionTimeoutMS: 5000,
});

        await Plan.deleteMany();
        await Plan.insertMany(plans);

        console.log("Subscription plans seeded successfully");
        process.exit(1);
    } catch (error) {
        console.error("Seeding failed:", error.message);
        process.exit(1);
    }
};

seedPlans();