const path = require('path'); // the built-in path module
const tm = require('./taskManager'); 
const { saveTasks, loadTasks } = require('./fileHandler');

//makes new tasks.json file and stores the tasks in an array in this file.
const filePath = path.join(__dirname, 'tasks.json');
console.log(filePath);

//load tasks
let allTasksArray = loadTasks(filePath);
console.log(allTasksArray);

//add tasks
tm.addTask(allTasksArray, "Walk Dog");
tm.addTask(allTasksArray, "Eat Dinner");
tm.addTask(allTasksArray, "Shower");
tm.addTask(allTasksArray, "Do Laundry");
tm.addTask(allTasksArray, "Study");

//list tasks
tm.listTasks(allTasksArray);

//save updated list to the file
saveTasks(filePath, allTasksArray);



