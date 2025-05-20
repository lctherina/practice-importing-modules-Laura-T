function addTask(tasks, task) {
    tasks.push(task);
}

function listTasks(tasks) {
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}



module.exports = {addTask, listTasks};

