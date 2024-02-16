const express = require('express');
const router = express.Router();
const { getAllTasks, addTask, updateTask ,deleteTask} = require('../Controllers/tasksControl')

// Route to add a new task
router.post('/addTask', addTask); // Define the route for adding a task


//Route to get all tasks
router.get('/getAllTasks', getAllTasks);

 //Route to edit a task
router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
