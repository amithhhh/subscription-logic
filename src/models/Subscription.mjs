import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        planId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Plan"

        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "active", "expired", "cancelled"],
            default: "pending"
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "success", "failed"],
            default: "failed"
        }
    },
    {timestamps: true}
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;