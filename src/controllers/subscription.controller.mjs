import Plan from "../models/Plan.mjs"
import Subscription from "../models/Subscription.mjs"

const createSubscription = async (req, res) => {
    try {
        const { userId, planId } = req.body;

        if (!userId || !planId) {
            return res.status(400).json({"message":"UserId and PlanId are required"});
        }
        const plan = await Plan.findById(planId);

        if (!plan || !plan.isActive) {
            return res.status(400).json({"message":"Invalid plan"});
        }
        const startDate = new Date();
        const endDate = new Date();

        endDate.setDate(startDate.getDate() + plan.durationInDays);

        const subscription = await Subscription.create({
            userId,
            planId,
            startDate,
            endDate,
            status:"pending",
            paymentStatus:"pending"
        })
        res.status(201).json({
            "message": "Subscription created successfully.",
            subscription
        });
    } catch (err) {
        res.status(500).json({"message": "Failed to create subscription"});
    }
}

export default createSubscription;