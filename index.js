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
    const response = await axios.get(API_URL + "users/" + user);
    const result = response.data;
    console.log(result);

    const user_data = {
      user_name: result.name,
      image_url: result.avatar_url,
      bio: result.bio,
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
