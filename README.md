# Full-Stack Authentication App

A React frontend with Node.js/Express backend authentication system using MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)



## Setup Instructions

### 1. Clone and Install Dependencies


# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install


### 2. Environment Configuration

Create a `.env` file in the `backend` directory:

```env
PORT=4000
MONGO_CON=your_mongodb_connection_string (aklesh , aklesh123)
JWT_SECRET=your_jwt_secret_key
```

### 3. Running the Application

#### Start Backend Server
```bash
cd backend
npm start
```
The backend will run on `http://localhost:4000`

#### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

## Features

- User registration and login
- JWT authentication
- Protected routes
- Simple alert notifications
- Responsive design

## API Endpoints

- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- Protected routes require JWT token

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB/Mongoose
- JWT
- bcrypt
- Joi validation

### Frontend
- React 19
- Vite
- React Router DOM

