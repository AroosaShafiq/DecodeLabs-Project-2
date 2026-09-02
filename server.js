const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
