# Utility Bill Management System

A full-stack MERN application for managing and paying utility bills such as **electricity, gas, water, and internet**. Users can view bills, filter by category, manage personal payments, and download PDF reports.

---

## 🚀 Features

### 🔐 Authentication
- User login & registration
- Firebase authentication
- Persistent login (React Context API)

### 📄 Bill Management
- View all bills
- Filter bills by category
- View latest 6 bills
- Detailed bill pages
- User-specific “My Bills” section

### 🧾 PDF Report
Generate and download a detailed PDF report that includes:
- User info  
- Total bills paid  
- Total amount paid  
- Full table of bills  

(Built using **jsPDF** + **jspdf-autotable**)

### 🛠️ CRUD Operations
- Add bills (admin/creator)
- Update user’s bill info
- Delete saved bills with confirmation
- Fetch user-specific bills by email

### 🎨 Frontend
- React + Vite
- Tailwind CSS + DaisyUI
- Fully responsive UI

---

## 🛢️ Database Structure (MongoDB)

### billsCollection example:
```json
{
  "_id": "6911d3d3584dfcf261ae59ed",
  "title": "Frequent Power Outage in Mirpur",
  "category": "Electricity",
  "email": "creator@gmail.com",
  "location": "Mirpur-10, Dhaka",
  "description": "Residents in Mirpur-10 are facing frequent outages...",
  "image": "https://i.ibb.co.com/j9SwCHP2/data1.jpg",
  "date": "2025-10-26",
  "amount": 260
}
```
---
## 🌐 Live Website
👉 [Click here to visit the live site](https://my-utility-hub.netlify.app/)


