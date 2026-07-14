# 🎓 Campus Connect ERP

![Status](https://img.shields.io/badge/Status-Work%20In%20Progress-orange)
![Frontend](https://img.shields.io/badge/Frontend-React-blue)
![Backend](https://img.shields.io/badge/Backend-FastAPI-green)
![Database](https://img.shields.io/badge/Database-MySQL-blue)
![Authentication](https://img.shields.io/badge/Auth-JWT-red)

## 🚧 Project Status

**Campus Connect ERP is currently under active development.**

This project is not yet feature-complete and is being continuously improved. The current version includes authentication, attendance management, student profile functionality, and core backend APIs. Additional modules and enhancements are planned for future releases.

---

## 📖 Overview

Campus Connect is a full-stack College ERP (Enterprise Resource Planning) system designed to streamline academic and administrative processes within educational institutions.

The goal of this project is to provide a centralized platform where students, teachers, and administrators can access and manage academic information efficiently.

This project is being developed using **React**, **FastAPI**, **MySQL**, and **JWT Authentication**.

---

## ✨ Current Features

### Authentication

* Secure JWT-based authentication
* Student login system
* Role-based access control

### Student Module

* Student profile page
* Attendance dashboard
* Subject information
* Attendance percentage tracking

### Backend

* FastAPI REST APIs
* MySQL database integration
* Protected routes using JWT tokens

### Frontend

* Responsive React UI
* Modern dashboard design
* Attendance management interface
* Profile management interface

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* HTML5
* CSS3

### Backend

* FastAPI
* Python

### Database

* MySQL

### Authentication

* JWT (JSON Web Token)

### Tools

* Git
* GitHub
* VS Code

---

## 📂 Project Structure

```text
CampusConnect/
│
├── backend/
│   ├── routers/
│   │   ├── auth.py
│   │   └── student.py
│   ├── main.py
│   ├── security.py
│   └── ...
│
├── frontend/
│   └── erp/
│       ├── public/
│       ├── src/
│       │   ├── pages/
│       │   ├── styles/
│       │   └── resources/
│       └── ...
│
└── .gitignore
```

---

## 🗄️ Database Setup

This project uses **MySQL** as its database.

Before running the backend:

1. Install MySQL Server.
2. Create a database named:

```sql
CREATE DATABASE erp;
```

3. Create the required tables and import your data.
4. Configure your database credentials in your local environment.

> **Note:** SQL schema files and sample data are currently not included in this repository and will be added in future updates.

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/RohaanAhmadQuadri/CampusConnect.git
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend will run on:

```text
http://127.0.0.1:8000
```

### Frontend Setup

```bash
cd frontend/erp
npm install
npm start
```

Frontend will run on:

```text
http://localhost:3000
```

---

## 📸 Screenshots

Screenshots will be added as the project progresses.

Suggested screenshots:

* Login Page
* Student Dashboard
* Attendance Module
* Student Profile Page

---

## 🛣️ Roadmap

Planned features include:

* Teacher Dashboard
* Admin Dashboard
* Marks Management
* Assignment Submission System
* Notice Board
* Timetable Management
* Fee Management
* Student Performance Analytics
* Enhanced Security Features
* Deployment and Hosting

---

## 🎯 Learning Objectives

This project was built to gain practical experience with:

* Full Stack Development
* REST API Development
* JWT Authentication
* Database Design
* React Application Development
* FastAPI Backend Development
* Git & GitHub Workflow

---

## 🤝 Contributions

This is currently a personal learning and development project.

Suggestions, feedback, and improvement ideas are always welcome.

---

## 👨‍💻 Author

**Rohaan Ahmad Quadri**

B.Tech CSE Student

GitHub: https://github.com/RohaanAhmadQuadri

---

## ⭐ Support

If you found this project interesting, consider giving it a star.

It motivates further development and helps showcase the project to a wider audience.
