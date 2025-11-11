# 💰 Finance Dashboard

A full-stack financial anlytics web application designed to visualize, analyze, and predict key financial performance metrics.

<p align="center">
<img width="30%" alt="Screenshot of Finance Dashboard (Dashboard)" src="https://github.com/user-attachments/assets/5099f431-36b6-4c5d-b197-1334e9ae5cc4" />
<img width="30%" alt="Screenshot of Finance Dashboard (Predictions)" src="https://github.com/user-attachments/assets/11227aec-d16a-45ca-a6aa-a8e902d11964" />
<img width="30%" alt="Screenshot of Finance Dashboard (Predictions with predicted revenue)" src="https://github.com/user-attachments/assets/2cfff3f5-bba8-4fac-bb5a-c2ff34ba5c2f" />
</p>

---

## 🚀 Key Features

- **Interactive Data Visualization:** Display revenue, expenses, and KPIs with dynamic, responsive charts using Recharts and Material UI.
- **Predictive Analytics:** Forecast future revenue using a linear regression model based on historical business data.
- **Responsive Dashboard:** Optimized grid layout for different screen sizes to provide a seamless user experience across devices.
- **Comprehensive Data Management:** Securely manage data with RESTful APIs and MongoDB Atlas.
- **Developer-Friendly Architecture:** Modular code structure, Redux Toolkit for state management, and Git-based version control for collaborative development.

---

## 🛠 Tech Stack

- **Frontend:** React, Redux Toolkit, Material UI, Recharts  
- **Backend:** Node.js, Express.js, MongoDB Atlas  
- **Machine Learning:** Linear regression for predictive revenue modeling  
- **Version Control:** Git
  
---

## ⚡ Setup Instructions

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install backend dependencies
cd server && npm install

# Install frontend dependencies
cd ../client && npm install

# Run backend
cd ../server
npm run dev

# Run frontend (in a separate terminal)
cd ../client
npm start
```
---

## 🔐 Environment Variables Setup

1. **Create `.env` file**  
   In the root of your project, create a file named `.env`.

2. **Add the following variables**  
   Copy and paste the contents below into your `.env` file:

```env
MONGO_URL=<your MongoDB Atlas connection string>
PORT=9000
```

