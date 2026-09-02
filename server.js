const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.redirect("/api/tasks");
});

// Task routes
app.use("/api/tasks", taskRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
