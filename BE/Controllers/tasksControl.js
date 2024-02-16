// taskController.js

const Task = require('../Model/TaskModel'); 

const user=require('../Model/userModel')// Import the Task model

// Rest of your code...


// Controller function to handle task creation
// Controller function to handle task creation
const addTask = async (req, res) => {
  try {
    const { name, description, dueDate, priority, category, userId } = req.body;

    // Check if required fields are provided
    if (!name || !description || !dueDate || !priority || !category || !userId) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new task
    const newTask = new Task({
      name,
      description,
      dueDate,
      priority,
      category,
      userId
    });

    // Save the task to the database
    await newTask.save();

    // Return the newly created task
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'An error occurred while creating the task' });
  }
};




// Controller function to get all tasks
const getAllTasks = async (req, res) => {
  try {
    // Fetch all tasks from the database
    const tasks = await Task.find();

    // Check if tasks were found
    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ error: 'No tasks found' });
    }

    // Send the tasks as JSON response
    res.status(200).json({ tasks });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching tasks:', error);

    // Send a 500 Internal Server Error response with an error message
    res.status(500).json({ error: 'An error occurred while fetching tasks' });
  }
};

// Controller function to update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params; // Get the task ID from request parameters
    const { name, description, dueDate, priority, category } = req.body; // Extract updated task data from request body

    // Check if the task ID is provided
    if (!id) {
      return res.status(400).json({ error: 'Task ID is required' });
    }

    // Find the task by ID and update its data
    const updatedTask = await Task.findByIdAndUpdate(
      id, // Task ID
      { name, description, dueDate, priority, category }, // Updated task data
      { new: true } // Return the updated task
    );

    // Check if the task was found and updated
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Send the updated task as JSON response
    res.status(200).json(updatedTask);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error updating task:', error);

    // Send a 500 Internal Server Error response with an error message
    res.status(500).json({ error: 'An error occurred while updating the task' });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // Get the task ID from request parameters

    // Check if the task ID is provided
    if (!id) {
      return res.status(400).json({ error: 'Task ID is required' });
    }

    // Find the task by ID and delete it
    const deletedTask = await Task.findByIdAndDelete(id);

    // Check if the task was found and deleted
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Send a success message as JSON response
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error deleting task:', error);

    // Send a 500 Internal Server Error response with an error message
    res.status(500).json({ error: 'An error occurred while deleting the task' });
  }
};

module.exports = { addTask, getAllTasks, updateTask,deleteTask };


