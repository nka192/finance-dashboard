# 💰 Finance Dashboard

**Full-Stack Financial Analytics Web Application**  

A full-stack web application designed to visualize, analyze, and predict key financial performance metrics.

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

