# 📝 Todo Application

A full-stack Todo Application developed as part of the **Ziptrrip Tech Developer Assignment**.

## Assignment Objective

Build a multi-page Todo application with:

- React Frontend (Multiple Pages)
- Node.js + Express.js Backend
- CRUD Operations
- Data persistence using a database or file

---

# Features

## Frontend

### Todo List Page

- View all todos
- Add new todo
- Edit existing todo
- Delete todo
- Mark todo as Completed/Pending
- Search todos by title
- Filter Todos
  - All
  - Completed
  - Pending
- Sort Todos
  - Newest
  - Oldest
- Responsive UI
- Professional Dashboard Design

### Todo Details Page

- View complete details of a selected todo
- Displays:
  - Title
  - Description
  - Status
  - Priority
  - Created Date
  - Updated Date
- Navigation back to Todo List

---

## Backend

REST API built using Express.js.

Supports complete CRUD functionality.

### APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /todos | Get all todos |
| GET | /todos/:id | Get todo by ID |
| POST | /todos | Create new todo |
| PUT | /todos/:id | Update todo |
| DELETE | /todos/:id | Delete todo |

---

# Technologies Used

## Frontend

- React
- React Router DOM
- Axios
- CSS3

## Backend

- Node.js
- Express.js
- CORS
- MySQL (or File Storage, depending on your implementation)

---

# Project Structure

```
todo-app
│
├── backend
│   ├── routes
│   ├── controllers
│   ├── models
│   ├── config
│   ├── app.js
│   └── package.json
│
├── frontend
│   ├── src
│   │
│   ├── components
│   ├── pages
│   ├── services
│   ├── App.jsx
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/todo-application.git
```

---

## Backend Setup

Navigate to backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Start server

```bash
npm start
```

Backend runs on

```
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run application

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Database

The application stores todo information including:

- Title
- Description
- Priority
- Completion Status
- Created Date
- Updated Date

---

# Screens

## Home Page

Displays

- Todo Form
- Search
- Filter
- Sort
- Todo Cards

---

## Todo Details Page

Displays

- Complete Todo Information
- Status Badge
- Priority Badge
- Created Date
- Updated Date

---

# Future Improvements

- User Authentication
- Dark Mode
- Categories
- Due Dates
- Notifications
- Drag and Drop
- Pagination

---

# Author

**Prashanth**

GitHub:
https://github.com/Prashanth415

---

# Assignment Information

Company: Ziptrrip Tech

Assignment:

✔ Multi-page React Application

✔ Node.js + Express Backend

✔ CRUD APIs

✔ Responsive Professional UI

✔ Documentation Included

✔ Git Repository Submission

