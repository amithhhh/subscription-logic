import express from 'express';
import router from './routes/plans.routes.mjs';
import subscription_route from './routes/subscription.routes.mjs';

const app = express();

app.use(express.json());

app.use("/api/plans", router);
app.use("/api/subscriptions", subscription_route);

app.get("/", (req, res) => {
    res.send("Subscription Backend is running");
});

export default app;