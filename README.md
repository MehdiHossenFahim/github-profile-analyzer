```md
# 🔍 GitSearch — GitHub Profile Analyzer

🚀 Live Demo: https://github-profile-analyzer-ashen.vercel.app/

A modern **developer intelligence dashboard** that analyzes GitHub profiles and generates insights like repository stats, language distribution, and developer scoring.

Built with **Node.js, Express, Axios, and EJS**, featuring a clean UI, analytics dashboard, and real-time GitHub API integration.

---

## ✨ Features

- 🔎 Search any GitHub username
- 👤 Developer profile analysis (avatar, bio, followers, following)
- 📦 Repository breakdown (stars, forks, language)
- 🧠 Developer scoring system (0–100)
- 🏆 Top repository detection
- 📊 Total stars, forks, and repo statistics
- 🧾 Language extraction and grouping
- 🎨 Modern responsive UI
- ⚡ Fast GitHub API integration

---

## 🖼️ Live Preview

👉 https://github-profile-analyzer-ashen.vercel.app/

---

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js
- Axios

**Frontend**
- EJS Templates
- HTML5 / CSS3
- Vanilla JavaScript

**API**
- GitHub REST API

---

## 📁 Project Structure

```

project-root/
│
├── public/
│   ├── styles/
│   ├── scripts/
│   └── images/
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   └── dashboard.ejs
│
├── index.js
├── package.json
└── README.md

````

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/gitsearch.git
cd gitsearch
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## 🧠 How It Works

The system:

1. Fetches GitHub user data using GitHub API
2. Fetches repositories
3. Calculates:

   * Total stars
   * Total forks
   * Language distribution
   * Developer score (0–100)
4. Renders a full analytics dashboard

---

## 📊 Developer Score Formula

```
score =
followers × 2 +
public_repos × 2 +
total_stars × 3 +
total_forks × 1
```

Normalized to a 0–100 scale.

---

## 🚀 Future Improvements

* 🌗 Dark / Light mode toggle
* 📊 Chart.js analytics dashboard
* 🔥 GitHub contribution heatmap
* 🤖 AI-generated developer summary
* 📄 Downloadable PDF report
* 🔄 Compare two GitHub users
* 💾 Search history

---

## 📌 Example Users

Try these usernames:

* torvalds
* gaearon
* sindresorhus
* octocat

---

## 👨‍💻 Author

**Mehedi Hossen Fahim**

* GitHub: [https://github.com/MehdiHossenFahim](https://github.com/MehdiHossenFahim)
* LinkedIn: [https://www.linkedin.com/in/mehedihossenfahim/](https://www.linkedin.com/in/mehedihossenfahim/)

---

## 📜 License

This project is licensed under the MIT License.

