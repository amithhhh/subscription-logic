import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        durationInDays: {
            type: Number,
            required: true
        }, 
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {timestamps: true}
)

const Plan = mongoose.model("Plan", planSchema)

export default Plan;