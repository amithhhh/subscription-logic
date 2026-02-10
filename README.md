# Subscription Backend (MEAN Stack)

## 📌 Project Overview

This project is a **subscription backend system** built using **Node.js, Express.js (ES Modules), and MongoDB**. It simulates how real-world SaaS platforms (like Google, YouTube, or Netflix) handle subscription plans and user subscriptions.

The goal of this project is to demonstrate **clean backend architecture**, **business logic separation**, and **professional development practices**. Payment processing is intentionally deferred to a later stage to keep the focus on subscription lifecycle design.

---

## 🧱 Tech Stack

* **Backend:** Node.js + Express.js
* **Module System:** ES Modules (`.mjs`)
* **Database:** MongoDB
* **ODM:** Mongoose
* **Environment Management:** dotenv
* **Testing:** curl / Postman

---

## 📂 Project Structure

```
subscription-backend/
│
├── src/
│   ├── app.mjs              # Express app configuration
│   ├── server.mjs           # Server entry point
│   │
│   ├── config/
│   │   ├── db.mjs           # MongoDB connection logic
│   │   ├── seedPlans.mjs    # Script to seed subscription plans
│   │   └── seedUser.mjs     # Script to seed demo user
│   │
│   ├── models/
│   │   ├── Plan.mjs         # Subscription plan model
│   │   ├── User.mjs         # Minimal user model (mock)
│   │   └── Subscription.mjs # Subscription lifecycle model
│   │
│   ├── controllers/
│   │   ├── plan.controller.mjs
│   │   └── subscription.controller.mjs
│   │
│   ├── routes/
│   │   ├── plan.routes.mjs
│   │   └── subscription.routes.mjs
│   │
│   └── middleware/
│       └── (reserved for auth & error handling)
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Environment Setup

Create a `.env` file at the root:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/subscription_db
```

Install dependencies:

```
npm install
```

Run the server in development mode:

```
npm run dev
```

---

## 🗄️ Database Models

### 1️⃣ Plan Model

Represents available subscription plans.

**Fields:**

* `name` (String)
* `price` (Number)
* `durationInDays` (Number)
* `isActive` (Boolean)

Plans are seeded into the database using a script.

---

### 2️⃣ User Model (Minimal / Mock)

A lightweight user model created only to support subscription logic.

**Fields:**

* `name` (String)
* `email` (String, unique)

> Note: Authentication is intentionally not implemented at this stage.

---

### 3️⃣ Subscription Model

Core business entity that represents a user's subscription.

**Fields:**

* `userId` (Reference to User)
* `planId` (Reference to Plan)
* `startDate`
* `endDate`
* `status` (`pending | active | expired | cancelled`)
* `paymentStatus` (`pending | success | failed`)

> Subscription status is separated from payment status to reflect real-world asynchronous payment systems.

---

## 🌱 Seed Scripts

### Seed Subscription Plans

```
node src/config/seedPlans.mjs
```

Seeds plans like:

* 1 Month
* 3 Months
* 6 Months
* 1 Year
* Lifetime

---

### Seed Demo User

```
node src/config/seedUser.mjs
```

Creates a single demo user used for testing subscriptions.

---

## 🔌 API Endpoints

### ✅ Get All Subscription Plans

```
GET /api/plans
```

Returns all active subscription plans.

---

### ✅ Create Subscription (User clicks a plan)

```
POST /api/subscriptions
```

**Request Body:**

```
{
  "userId": "<demo_user_id>",
  "planId": "<plan_id>"
}
```

**Behavior:**

* Validates plan
* Calculates start and end dates
* Creates subscription with `pending` status

> Payment handling will be integrated in a later stage.

---

## 🧠 Design Decisions

* **Subscription lifecycle is separated from payment logic**
* **Seed scripts** are used instead of hardcoding data
* **Minimal user model** allows focus on core business logic
* **ES Modules** used for modern Node.js compatibility
* Server starts **only after successful DB connection**

---

## 🚀 Future Enhancements

* JWT-based authentication
* Prevent duplicate active subscriptions
* Payment gateway integration (Stripe / Razorpay)
* Subscription activation & expiry cron jobs
* Admin APIs for managing plans

---

## 📌 Status

✅ Backend foundation complete
✅ Subscription creation logic implemented
⏳ Payment & auth to be added

---

## 👤 Author

**Amith E.K**
Backend / Full‑Stack Developer (MERN Stack)

---

This project is built as part of a real-world backend assignment to demonstrate professional subscription system design.
