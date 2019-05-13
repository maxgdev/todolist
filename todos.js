// It should store the todos array on an object
var todoList = {
    // empty array for addTodo objects
    todos: [],
    displayTodos: function(){
        console.log ("My Todos: ", this.todos);
    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, changedTodoText){
        this.todos[position].todoText = changedTodoText;
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
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
todoList.addTodo('first todo');
todoList.addTodo('second todo');
todoList.addTodo('third todo');
todoList.addTodo('last todo');

// It should have a function to change a todo
// added changeTodo function/method to todoList object
todoList.changeTodo(3, 'ChangedTodo - Final todo!');

// todoList.toggleCompleted should change the completed property
todoList.toggleCompleted(0);
todoList.toggleCompleted(3);

// It should have a function to delete a todo
// added deleteTodo function/method to todoList object
// todoList.deleteTodo(3);