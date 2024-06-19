let myArray = [{
    name:'',
    dueDate:''
}];

function listOnScreen() {
    let todoListHTML = '';
    for (i=1; i < myArray.length; i++) {
        const todo = myArray[i];
        //const name = todo.name;
        //const dueDate = todo.dueDate;
        //const {name, dueDate} = todo; //simple version of above two lines
        const html = `
        <div>${todo.name}</div>
        <div>${todo.dueDate}</div>
             
        <button class= "deleteButton" onClick="
            myArray.splice(${i}, 1);
            listOnScreen();
            ">
            Delete
        </button>`;
        todoListHTML += html;
    }                
    document.querySelector ('.LIST').innerHTML = todoListHTML;
}

function takeInput() {
    const input= document.querySelector('.Tasklist');
    const name = input.value;

    const dateinput= document.querySelector('.Taskdate');
    const dueDate = dateinput.value;

    myArray.push({
        name,
        dueDate
    });
    input.value = '';
    dateinput.value = '';
    listOnScreen();
}

function keypressed(event) {
    if (event.key === 'Enter') {
        takeInput()
    }
}