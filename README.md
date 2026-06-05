# 🔍 GitSearch

> A minimal developer intelligence engine that transforms any GitHub profile into clean, structured insights.

🚀 Live Demo → https://github-profile-analyzer-ashen.vercel.app/

---

## ✨ Overview

GitSearch analyzes GitHub profiles and converts raw developer data into meaningful intelligence — including repositories, language distribution, and performance scoring.

---

## ⚡ Core Features

- 🔎 Instant GitHub profile lookup
- 👤 Developer profile overview
- 📦 Repository analytics (stars, forks, language)
- 🧠 Developer scoring system (0–100)
- 🏆 Top repository detection
- 📊 Aggregated metrics
- 🧾 Language distribution mapping
- 🎨 Responsive modern UI
- ⚡ Real-time GitHub API integration

---

## 🧠 Intelligence Engine

Developer score formula:

```

score =
(followers × 2) +
(public_repos × 2) +
(total_stars × 3) +
(total_forks × 1)

```

Normalized to a **0–100 scale**.

---

## 🖥️ Tech Stack

**Backend**
- Node.js
- Express.js
- Axios

**Frontend**
- EJS Templates
- HTML5 + CSS3
- Vanilla JavaScript

**API**
- GitHub REST API

---

## 📁 Project Structure

```

project-root/
├── public/
│   ├── styles/
│   ├── scripts/
│   └── images/
├── views/
│   ├── partials/
│   ├── index.ejs
│   └── dashboard.ejs
├── index.js
├── package.json
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone repository
```bash
git clone https://github.com/your-username/gitsearch.git
cd gitsearch
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

App runs at:

```
http://localhost:3000
```

---

## 🔄 Workflow

1. Enter GitHub username
2. Fetch profile + repositories
3. Analyze data
4. Render dashboard

---

## 📊 Insights Generated

* Total stars
* Total forks
* Top repository
* Languages used
* Developer score

---

## 🚧 Roadmap

* 🌗 Dark / Light mode
* 📊 Chart.js analytics
* 🔥 Contribution heatmap
* 🤖 AI developer summary
* 📄 PDF export
* 🔄 Compare users
* 💾 Search history

---

## 🎯 Example Profiles

* torvalds
* gaearon
* sindresorhus
* octocat

---

## 👨‍💻 Author

Mehedi Hossen Fahim

* GitHub: [https://github.com/MehdiHossenFahim](https://github.com/MehdiHossenFahim)
* LinkedIn: [https://www.linkedin.com/in/mehedihossenfahim/](https://www.linkedin.com/in/mehedihossenfahim/)

---

## 📜 License

Distributed under the MIT License. See LICENSE for details.


