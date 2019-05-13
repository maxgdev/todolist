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
var index = 1; // index variable to indicate which todo  we want changed
todos[index] = "Changed item";
displayTodos();

// It should have a way to delete a todo
var deleteStart = 0 // where to start delete
var howManyToDelete = 1 // we are only deleting I item
todos.splice(deleteStart, howManyToDelete);
displayTodos();