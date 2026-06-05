import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.github.com/";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


function calculateScore(profile, repos) {
  const followers = profile.followers || 0;
  const publicRepos = profile.public_repos || 0;

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);


  let score =
    followers * 2 +
    publicRepos * 2 +
    totalStars * 3 +
    totalForks * 1;


  return Math.min(100, Math.round(score / 10));
}


function getTopRepo(repos) {
  if (!repos.length) return null;

  return repos.reduce((max, repo) =>
    repo.stargazers_count > (max?.stargazers_count || 0) ? repo : max
  );
}


function getLanguages(repos) {
  const langMap = {};

  repos.forEach((repo) => {
    if (repo.language) {
      langMap[repo.language] = (langMap[repo.language] || 0) + 1;
    }
  });

  return Object.keys(langMap);
}

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  const user = req.body.name?.trim();

  if (!user) {
    return res.send("Please enter a GitHub username");
  }

  try {
    const [userResponse, reposResponse] = await Promise.all([
      axios.get(`${API_URL}users/${user}`),
      axios.get(`${API_URL}users/${user}/repos?per_page=100&sort=updated`)
    ]);

    const profile = userResponse.data;
    const repos = reposResponse.data;

    // ---- analytics ----
    const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
    const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);
    const topRepo = getTopRepo(repos);
    const languages = getLanguages(repos);
    const score = calculateScore(profile, repos);

    const user_data = {
      user_name: profile.name || profile.login,
      username: profile.login,
      image_url: profile.avatar_url,
      bio: profile.bio || "No bio available",
      location: profile.location || "Unknown",
      followers: profile.followers,
      following: profile.following,
      repos_count: profile.public_repos,

      repos: repos,

      analytics: {
        totalStars,
        totalForks,
        topRepo,
        languages,
        score
      }
    };

    console.log("User loaded:", profile.login);
    console.log("Total stars:", totalStars);
    console.log("Score:", score);

    res.render("dashboard.ejs", { data: user_data });

  } catch (error) {
    const status = error.response?.status;

    if (status === 404) {
      return res.send("User not found");
    }

    if (status === 403) {
      return res.send("GitHub API rate limit exceeded. Try later.");
    }

    console.log(error.response?.data || error.message);
    res.send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});