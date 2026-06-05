# <img src="/public/images/icon.png" height = "32px">  GitSearch

> A developer intelligence engine that transforms any GitHub profile into structured, actionable insights.

<p align="center">
  <a href="https://github-profile-analyzer-ashen.vercel.app/">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Open%20App-4FD1C5?style=for-the-badge" />
  </a>
  <a href="https://github.com/MehdiHossenFahim">
    <img src="https://img.shields.io/badge/⭐%20Source%20Code-GitHub-111827?style=for-the-badge" />
  </a>
  <a href="https://www.linkedin.com/in/mehedihossenfahim/">
    <img src="https://img.shields.io/badge/💼%20Connect-LinkedIn-0A66C2?style=for-the-badge" />
  </a>
</p>

---

## ✨ Overview

GitSearch analyzes GitHub profiles and converts raw developer activity into meaningful intelligence.

It is designed to help you quickly understand a developer’s:
- contribution strength
- technical footprint
- repository impact
- language distribution

---

## ⚡ Core Capabilities

- 🔎 Instant GitHub profile analysis
- 👤 Clean developer profile breakdown
- 📦 Repository intelligence (stars, forks, languages)
- 🧠 Developer scoring system (0–100)
- 🏆 Automatic top repository detection
- 📊 Aggregated performance metrics
- 🧾 Language distribution mapping
- 🎨 Modern responsive UI
- ⚡ Real-time GitHub API integration

---

## 🧠 Intelligence Engine

GitSearch generates a **developer score** using weighted signals:

```txt
score =
(followers × 2) +
(public_repos × 2) +
(total_stars × 3) +
(total_forks × 1)
````

The final score is normalized into a **0–100 scale**, representing overall developer impact.

---

## 🖥️ Tech Stack

**Backend**

* Node.js
* Express.js
* Axios

**Frontend**

* EJS Templates
* HTML5 + CSS3
* Vanilla JavaScript

**API Layer**

* GitHub REST API

---

## 📁 System Architecture

```
project-root/
├── public/          # Static assets (CSS, JS, images)
├── views/           # EJS templates
│   ├── partials/
│   ├── index.ejs
│   └── dashboard.ejs
├── index.js         # Express server
├── package.json
└── LICENSE
```

---

## 🚀 Getting Started

### 1. Clone repository

```bash
git clone https://github.com/your-username/gitsearch.git
cd gitsearch
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 🌐 App runs at:

```txt
http://localhost:3000
```

---

## 🔄 Workflow

1. User enters a GitHub username
2. GitHub API fetches profile + repositories
3. Backend processes and analyzes data
4. Dashboard renders structured intelligence

---

## 📊 Insights Generated

GitSearch extracts and computes:

* ⭐ Total stars across repositories
* 🍴 Total forks
* 🏆 Most popular repository
* 💻 Language distribution
* 🧠 Developer score (0–100)

---

## 🚧 Roadmap

* 🌗 Dark / Light mode toggle
* 📊 Chart.js analytics dashboard
* 🔥 GitHub contribution heatmap
* 🤖 AI-powered developer summary
* 📄 Exportable PDF report
* 🔄 Compare two developers
* 💾 Search history (localStorage)

---

## 🎯 Example Profiles

Try analyzing:

* torvalds
* gaearon
* sindresorhus
* octocat

---

## 👨‍💻 Author

**Mehedi Hossen Fahim**
<br><br>
 <a href="https://www.linkedin.com/in/mehedihossenfahim/">
    <img src="https://img.shields.io/badge/💼%20Connect-LinkedIn-0A66C2?style=for-the-badge" />
  </a>

---

## 📜 License

This project is licensed under the MIT License.

