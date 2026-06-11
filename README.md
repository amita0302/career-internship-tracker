# 🎯 Career Internship Tracker

A full-featured React web application to help students track internship applications, interviews, and career progress — all in one place.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat)

---

## 🌐 Live Demo

🔗 [View Live App](https://your-deployment-link.netlify.app) <!-- Replace with your Netlify/Vercel link -->

---

## 📸 Screenshots

> _Add screenshots here after deployment_

| Dashboard | Internship List | Add Application |
|-----------|----------------|-----------------|
| ![Dashboard](screenshots/dashboard.png) | ![List](screenshots/list.png) | ![Add](screenshots/add.png) |

---

## ✨ Features

- 📊 **Dashboard** — Visual overview with cards and charts showing total applications, interviews, offers, and rejections
- 📝 **Internship Management** — Create, edit, and delete internship applications with full details
- 🔍 **Search & Filter** — Instantly filter by status, company name, or date
- 🔐 **Authentication** — Login page with protected routes (mock/Firebase auth)
- 🌐 **API Integration** — Fetches job/company data using DummyJSON API (GET, POST, error handling, loading states)
- 📱 **Responsive Design** — Works seamlessly on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend | React JS 18, React Router v6 |
| State Management | Redux Toolkit |
| HTTP Client | Axios |
| Styling | CSS3 / Tailwind CSS |
| Auth | Mock Authentication / Firebase |
| API | DummyJSON |
| Deployment | Netlify / Vercel |

---

## 📁 Project Structure

```
career-internship-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── InternshipList/
│   │   ├── AddInternship/
│   │   ├── Auth/
│   │   └── Navbar/
│   ├── pages/
│   ├── redux/
│   │   └── slices/
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js v16+
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/amita0302/career-internship-tracker.git
   cd career-internship-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root:
   ```env
   REACT_APP_API_URL=https://dummyjson.com
   REACT_APP_FIREBASE_API_KEY=your_key_here  # if using Firebase
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📡 API Integration

This project uses the [DummyJSON API](https://dummyjson.com) to fetch and simulate job/company data.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Fetch company/job listings |
| POST | `/products/add` | Add a new application |

- ✅ Loading states implemented
- ✅ Error handling with user feedback
- ✅ Axios interceptors for request management

---

## 📋 Application Status Flow

```
Applied → Screening → Interview → Offer ✅
                              ↘ Rejected ❌
```

---

## 🔐 Authentication

- Mock login with hardcoded credentials for demo
- Protected routes using React Router
- Session persistence via localStorage

**Demo Credentials:**
```
Email:    student@demo.com
Password: intern123
```

---

## 🎥 Demo Video

📹 [Watch 3-minute walkthrough](#) <!-- Add your Loom/YouTube link -->

Covers:
- Architecture overview
- Component breakdown
- API integration demo
- Challenges faced & solutions

---

## 👩‍💻 Author

**Amita Singh**
- 🎓 B.Tech CS — IMSEC, Ghaziabad (Batch 2023–27)
- 💼 HCL Software Intern | AI/ML & Cybersecurity Enthusiast
- 🔗 [GitHub](https://github.com/amita0302) | [LinkedIn](https://linkedin.com/in/-amitasingh)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
