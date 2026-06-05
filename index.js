import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.github.com/";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  const user = req.body.name;

  try {
    const [userResponse, reposResponse] = await Promise.all([
      axios.get(`${API_URL}users/${user}`),
      axios.get(`${API_URL}users/${user}/repos?sort=updated&per_page=10`)
    ]);

    const profile = userResponse.data;
    const repos = reposResponse.data;

    const user_data = {
      user_name: profile.name,
      image_url: profile.avatar_url,
      bio: profile.bio,
      repos: repos
    };

    res.render("dashboard.ejs", { data: user_data });

  } catch (error) {
    console.log(error.response?.data || error.message);
    res.send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Server running on "http://localhost:${port} "`);
});
