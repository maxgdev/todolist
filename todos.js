// It should have a place to store todos
// Using arrays
var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

// It should have a way to display todos
function displayTodos(){
    console.log ("My Todos: ",todos);
}
displayTodos();

// It should have a way to add new todos
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}
addTodo('New item');
addTodo('Another item');

// It should have a way to change a todo
// var index = 1; // index variable to indicate which todo  we want changed
function changeTodo(position, changedTodo){
    todos[position] = changedTodo;
    displayTodos();
}
changeTodo(2, 'Changed item!');

// It should have a way to delete a todo
function deleteTodo(position){
    // position - where to start delete
var howManyToDelete = 1 // we are only deleting I item
todos.splice(position, howManyToDelete);
displayTodos();
}
deleteTodo(0);