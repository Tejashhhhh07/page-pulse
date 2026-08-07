# 🚀 Page Pulse

> AI-powered website SEO and performance analyzer that provides actionable insights in seconds.

## 🌐 Live Demo

[View Page Pulse Live](YOUR_VERCEL_URL)

## 📌 Overview

Page Pulse is a web-based website analysis tool that evaluates a website's SEO health, performance, and content structure.

Users simply enter a website URL, and Page Pulse analyzes the website and presents important metrics through an easy-to-understand dashboard.

## ✨ Features

- 🔍 Website URL analysis
- 📊 SEO health score
- ⚡ Website response time measurement
- 🌐 HTTP status monitoring
- 📝 Page title analysis
- 🔤 H1 tag detection
- 🖼️ Image and alt-text analysis
- 🔗 Link analysis
- 📄 Content and word count analysis
- 💡 Actionable SEO recommendations
- ❌ Invalid URL and error handling
- 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Axios
- CSS
- Lucide React

### Backend

- Node.js
- Express.js
- Axios
- Cheerio
- CORS

### Deployment

- Vercel — Frontend
- Render — Backend

## 📂 Project Structure

```text
page-pulse/
│
├── backend/
│   ├── controllers/
│   │   └── analyzeController.js
│   ├── routes/
│   │   └── analyzeRoutes.js
│   ├── utils/
│   │   └── parser.js
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── Styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── ...
│
├── screenshots/
│   ├── Homepage.jpeg
│   ├── Analysis result.jpeg
│   └── Error handling.jpeg
│
├── .gitignore
└── README.md