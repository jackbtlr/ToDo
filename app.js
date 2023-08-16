const toDoList = []
let task = prompt('What would you like to do?')

while(task !== 'quit'){
    if(task === 'new'){
        let newTask = prompt('Enter new todo');
        toDoList.push(newTask);
        console.log(`${newTask} added to list`);
    }
    else if (task === 'list'){
        console.log('**********');
        for (let i = 0; i < toDoList.length; i++){
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log('**********');
    }
    else if(task === 'delete'){
        let index = parseInt(prompt('Enter index of todo to delete'));
        toDoList.splice(index, 1);
        console.log('Todo removed');
    }

    task = prompt('What would you like to do?');
}
console.log('OK, YOU QUIT THE APP');