const tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
  },
  {
    id: 2,
    title: "Build REST API",
    completed: false,
  },
];

const getTasks = (req, res) => {
  res.status(200).json({
    message: "Tasks fetched successfully",
    tasks: tasks,
  });
};

const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.status(200).json({
    message: "Task fetched successfully",
    task: task,
  });
};

const createTask = (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const newTask = {
    id: tasks.length + 1,
    title: title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    task: newTask,
  });
};
const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  if (title !== undefined) {
    if (title.trim() === "") {
      return res.status(400).json({
        message: "Title cannot be empty",
      });
    }

    task.title = title;
  }

  if (completed !== undefined) {
    task.completed = completed;
  }

  res.status(200).json({
    message: "Task updated successfully",
    task: task,
  });
};
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.status(200).json({
    message: "Task deleted successfully",
    task: deletedTask[0],
  });
};
module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
