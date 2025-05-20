const path = require('path'); // the built-in path module
const taskManager = require('./taskManager'); 
const fileHandler = require('./fileHandler');

//makes new tasks.json file and stores the tasks in an array in this file.
const filePath = path.join(__dirname, 'tasks.json');

let tasks = fileHandler.loadTasks(filePath);



taskManager.addTask(tasks, "Walk Dog");
taskManager.addTask(tasks, "Eat Dinner");
taskManager.addTask(tasks, "Shower");
taskManager.addTask(tasks, "Do Laundry");
taskManager.addTask(tasks, "Study");


taskManager.listTasks(tasks);

fileHandler.saveTasks(filePath, tasks);

