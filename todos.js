// It should store the todos array on an object
var todoList = {
    todos: ['item 1', 'item 2', 'item 3', 'item 4'],
    displayTodos: function(){
        console.log ("My Todos: ", this.todos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, changedTodo){
        this.todos[position] = changedTodo;
        this.displayTodos();
    },
    deleteTodo: function(position){
        // position - where to start delete
        var howManyToDelete = 1 // we are only deleting I item
        this.todos.splice(position, howManyToDelete);
        this.displayTodos();
    }
}

// It should have a function to display todos
// added displayTodo to todoList object
todoList.displayTodos();

// It should have a function to add new todos
// added addTodo to todoList object
todoList.addTodo('New item');
todoList.addTodo('Another item');

// It should have a function to change a todo
// added changeTodo function/method to todoList object
todoList.changeTodo(2, 'ChangedTodo - Changed item!');

// It should have a function to delete a todo
// added deleteTodo function/method to todoList object
todoList.deleteTodo(3);