# 🌍 Wanderlust Travel Agency Management System

A full-stack web application designed for travel agencies to manage trips and customer bookings efficiently. This system allows administrators to create travel packages, process customer reservations, and track agency data in real-time.

## 🚀 Features

- **Trip Management**: Full CRUD (Create, Read, Update, Delete) functionality for travel destinations.
- **Booking System**: Streamlined process for registering customers to specific trips with automatic price calculation.
- **Dynamic Dashboard**: Interactive feature cards for quick navigation.
- **Real-time Search**: Instant filtering for both trips and bookings.
- **Cloud Database**: Integrated with Supabase for secure and persistent data storage.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla ES6+)
- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **API**: RESTful Architecture

## 📂 Project Structure

```
travel-agency-system/
├── backend/
│   ├── config/          # Database connection settings
│   ├── controllers/     # Request handling logic
│   ├── models/          # Data access layer (Supabase queries)
│   ├── routes/          # API endpoint definitions
│   ├── server.js        # Entry point
│   └── .env             # Environment variables (Private)
├── frontend/
│   └── index.html       # Single Page Application UI
└── README.md
```
## ⚙️ Installation & Setup
1. Prerequisites
 - Node.js installed on your machine.

2. Backend Configuration
 - Navigate to the backend folder: cd backend
 - Install dependencies: npm install
 - Start The Server: npm start

2. Frontend Configuration
 - Open frontend/index.html.
 - Ensure the API_BASE_URL matches your backend: http://localhost:3000/api.
 - Use Live Server in VS Code to run the file or open it in a modern browser.

🧪 Testing
Test Cases Performed:
 - TC-01 (Trip Creation): Verified that adding a trip saves to Supabase and updates the UI.

 - TC-02 (Booking Calculation): Confirmed Total Amount automatically updates based on Price * People.

 - TC-03 (Navigation): Verified all Feature Cards on the Home page route to the correct sections.

 - TC-04 (Search): Confirmed that searching by destination or customer name filters tables correctly.
