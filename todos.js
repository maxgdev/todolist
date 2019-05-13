// It should store the todos array on an object
var todoList = {
    todos: ['item 1', 'item 2', 'item 3', 'item 4'],
    displayTodos: function(){
        console.log ("My Todos: ", this.todos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    }
}


// It should have a function to display todos
// added displayTodo to todoList object
todoList.displayTodos();

// It should have a function to add new todos
// added addTodo to todoList object
/* function addTodo(todo){
    todos.push(todo);
    displayTodos();
} */
todoList.addTodo('New item');
todoList.addTodo('Another item');

// It should have a function to change a todo
// var index = 1; // index variable to indicate which todo  we want changed
function changeTodo(position, changedTodo){
    todos[position] = changedTodo;
    displayTodos();
}
changeTodo(2, 'Changed item!');

// It should have a function to delete a todo
function deleteTodo(position){
    // position - where to start delete
var howManyToDelete = 1 // we are only deleting I item
todos.splice(position, howManyToDelete);
displayTodos();
}
deleteTodo(3);