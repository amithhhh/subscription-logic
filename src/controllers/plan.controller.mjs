import Plan from "../models/Plan.mjs";

export const getPlans = async(req, res) => {
    try {
        const plans = await Plan.find({isActive: true});
        res.status(200).json(plans)
    } catch (error) {
        res.status(500).json({message: "Failed to fetch plans"})
    }
}