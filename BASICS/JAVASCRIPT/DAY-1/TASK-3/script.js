//ES6
// == vs ===
//var, let, const
//regular expression

//strings and its method
//functions
//arrow functions
//arrays and its method(map, filter, reduce)
//loops - for, forEach
//conditional and ternary operators
//DOM And DOM manipulation()

function AddTask(){
    var task = document.getElementById("todo-input").value;
    var todoList = document.getElementById("todo-list");

    if(task === ''){
        alert('Enter Task.');
        return;
    }

    var listItem = document.createElement('li');
    listItem.className = "todo-list-item";

    const doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.className = "done-button";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-button";

    const span = document.createElement('span');
    span.className = "task";
    span.innerText = task;

    deleteButton.onclick = () => {
        listItem.remove();
    };

    doneButton.onclick = () => {
        listItem.classList.toggle("done");
        doneButton.innerText = listItem.classList.contains("done")? "UnDone" : "Done";
    };

    listItem.appendChild(span);
    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
}


