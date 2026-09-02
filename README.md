#  Vehicle Service Booking System

A full-stack vehicle service booking application that allows users to book vehicle services, select mechanics, and manage bookings. It also provides an admin dashboard to monitor customers, mechanics, bookings, completed services, and revenue.

---

## Project Overview

The Vehicle Service Booking System is a full-stack web application developed to simplify vehicle service management.

Users can:

- Register and login
- View available services
- Select a mechanic
- Book a vehicle service
- View booking information

Admins can:

- Manage users
- Manage mechanics
- Manage services
- View bookings
- View dashboard statistics
- Track completed bookings
- Monitor total revenue

The main purpose of this project is to provide a centralized system for managing vehicle service bookings and related data.

---

##  Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Axios
- Tailwind CSS
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- Sequelize ORM
- JWT Authentication
- bcrypt

### Database
- MySQL

### Infrastructure / Deployment
- AWS EC2 – Backend deployment
- Vercel – Frontend deployment
- GitHub – Source code management

---

##  Architecture

The application follows a client-server architecture:

```text
Frontend (React)
       ↓
     Axios
       ↓
 REST API
       ↓
Backend (Node.js + Express)
       ↓
 Sequelize ORM
       ↓
    MySQL

## Backend Setup

Create a .env file inside the backend folder:

PORT=8080

DB_NAME=your_database_name
DB_USERNAME=root
DB_PASSWORD=your_database_password
DB_HOST=localhost

JWT_SECRET=your_jwt_secret

Run seeders if required:

npx sequelize-cli db:seed:all

Start the backend:

npm start

The backend will run on:

http://localhost:8080

Frontend Setup

Open another terminal and go to the frontend folder:

cd frontend

Install dependencies:

npm install

Create a environment.js file:

export const BACKEND_URL='https://localhost:8080'    //'https://ec2-13-232-76-228.ap-south-1.compute.amazonaws.com:8080';   

Start the frontend:

npm run dev

The frontend will normally run on:

http://localhost:5173

API Documentation

The frontend communicates with the backend through REST APIs.

Authentication

Register
POST /api/register

Used to create a new user account.

Login
POST /api/login

Used to authenticate a user and receive a JWT token.

Services

Add Service
POST /api/service

Creates a new service.

Mechanic

Add Mechanic
POST /api/mechanics

Creates a new mechanic.

Bookings
Create Booking
POST /api/bookings

Creates a new vehicle service booking.

Example request:

{
  "UserId": 1,
  "ServiceId": 2,
  "MechanicId": 3,
  "Vehicle": "Honda City"
}
Get Bookings
GET /api/bookings

Returns bookings.

Pagination

Bookings support pagination using page and limit.

Example:

GET /api/bookings?page=1&limit=10

Response contains:

{
  "count": 500,
  "rows": []
}

Where:

count = total number of bookings
rows = bookings for the requested page
Dashboard
Get Dashboard Statistics
GET /api/dashboard

Returns dashboard statistics such as:

Total Customers
Total Mechanics
Total Bookings
Completed Bookings
Total Revenue

Example response:

{
  "totalCustomers": 52,
  "totalMechanics": 21,
  "totalBookings": 500,
  "completedBookings": 106,
  "totalRevenue": 1190300
}
