# Agricultural Management Dashboard

A modern **Agricultural Management System** dashboard built with **React**, **Bootstrap**, and **JavaScript**. This project provides an intuitive interface to manage crops, view crop details, and maintain a responsive user-friendly dashboard. The application uses React state management for dynamic updates and local rendering without a backend.

---

## 🛠 Features

### Dashboard Overview
- Header with project title and tagline
- Sidebar for crop categories
- Main content displaying selected crop details (name, description, season)
- Footer with copyright and links
- Fully responsive layout using **Bootstrap**

### Crop Management
- Select crops from sidebar
- Dynamic display of crop details in main content
- Preloaded crop data: Wheat, Rice, Corn
- Update selected crop using React state

### Responsive Design
- Mobile-friendly layout
- Flexible grid system for sidebar and content
- Footer sticks to the bottom with `flex-column` layout

---

## 💻 Technologies Used

- **Frontend:** React (Functional Components & Hooks)
- **Routing:** react-router-dom
- **Styling:** Bootstrap 5, custom CSS
- **State Management:** React `useState` Hook
- **Data Handling:** Local in-component state
- **Responsive Design:** Bootstrap Grid & Utility Classes

---

## 📁 Project Structure
Agricultural-Dashboard/
│
├── public/
│ └── index.html # Root HTML file
│
├── src/
│ ├── components/
│ │ ├── Header.jsx # Header component
│ │ ├── Sidebar.jsx # Sidebar component
│ │ ├── MainContent.jsx # Main content component
│ │ └── Footer.jsx # Footer component
│ │
│ ├── pages/
│ │ └── Home.jsx # Home page with crop selection
│ │
│ ├── App.jsx # App routes and main layout
│ ├── index.jsx # Entry point with ReactDOM & BrowserRouter
│ └── index.css # Global CSS
│
├── package.json # Project dependencies
└── README.md # Project documentation


## 🚀 Getting Started
**Clone the repository**

git clone https://github.com/yourusername/Agricultural-Dashboard.git
cd Agricultural-Dashboard

Install dependencies

npm install

Start the development server

npm start

Open the app

The app will automatically open at http://localhost:3000
