# Authentication System

A simple and secure User Registration & Login System built using Node.js, Express.js, MongoDB, and JWT Authentication.

---

##  Features

✅ User Registration

✅ User Login

✅ Password Hashing using bcrypt

✅ JWT Authentication

✅ Protected Routes

✅ Session Management

✅ MongoDB Database Integration

✅ REST API Architecture

---

##  Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Security
- bcrypt.js

### Tools
- Postman
- Git & GitHub



##  Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/authentication.git
```

### Move into Project

```bash
cd authentication
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

```

### Run Server

```bash
npm start
```

Server will run on:

```bash
http://localhost:5000
```

---

## 📌 API Endpoints

### Register User

```http
POST /user/register
```

#### Request Body

```json
{
  "fullname": "Prince",
  "email": "prince@gmail.com",
  "password": "123456"
}
```

#### Response

```json
{
  "message": "User Registered Successfully"
}
```

---

### Login User

```http
POST /user/login
```

#### Request Body

```json
{
  "email": "prince@gmail.com",
  "password": "123456"
}
```

#### Response

```
{
  "message": "User Logged in Successfully"
}
---


## 🔒 Security Features

- Passwords are hashed before storage.
- JWT Tokens for authentication.
- Protected routes using middleware.
- Environment variables for sensitive data.

---

## 🧪 Testing

Use Postman to test all API endpoints.

Example:

```bash
POST /register
POST /login
GET /profile
```

---


## 🎯 Future Improvements

- Email Verification
- Password Reset
- Refresh Tokens
- OAuth Login (Google/GitHub)
- Two-Factor Authentication (2FA)

---

## 👨‍💻 Author

**Sonu Kumar**

Computer Science Student | Backend Developer | Cybersecurity Enthusiast

---

## ⭐ Support

If you found this project useful, consider giving it a star ⭐ on GitHub.