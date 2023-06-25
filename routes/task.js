const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getParticularTask,
  deleteTask,
  createTask,
  updateTask,
} = require("../controllers/task");

router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getParticularTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;
