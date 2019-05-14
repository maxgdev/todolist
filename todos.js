// It should store the todos array on an object
var todoList = {
    // empty array for addTodo objects
    todos: [],
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, changedTodoText){
        this.todos[position].todoText = changedTodoText;
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    deleteTodo: function(position){
        // position - where to start delete
        var howManyToDelete = 1 // we are only deleting I item
        this.todos.splice(position, howManyToDelete);
    },
    toggleAll: function(){
        // .toggleAll: if everthing's true, make everything false
        // .toggleAll: Otherwise, make everything true
        var totalTodos = this.todos.length; // total no# of todos
        var completedTodos = 0; //count how many are complete
        for(var i=0; i < totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos = completedTodos+1;
            }
        }
        // is completed todos the same as total todos
        if(completedTodos === totalTodos){
            // make everything false 
            // loop through and make everything false
            for(var i=0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        } else {
            // make everytrhing true
            // loop through and make everything true
            for(var i=0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
    }
}

// hardware data entered - DELETE in V11
todoList.addTodo('first todo');
todoList.addTodo('second todo');
todoList.addTodo('third todo');
todoList.addTodo('last todo');

// onclick handlers
var handlers = {
    displayTodos: function(){
        todoList.displayTodos();
        view.displayTodos();
    },
    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        // console.log(addTodoTextInput.value);
       todoList.addTodo(addTodoTextInput.value);
       addTodoTextInput.value = '';
       view.displayTodos();
    },
    changeTodo: function(){
        var changeTodoPosition = document.getElementById('changeTodoPosition');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
        changeTodoPosition.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(){
        var deleteTodoPosition = document.getElementById('deleteTodoPosition');
        todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
        deleteTodoPosition.value = '';
        view.displayTodos();
    },
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    }
    
}

// Exit the console
var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul'); // find UL element
        todosUl.innerHTML = ''; // clear ul element before loop
        for(var i=0; i< todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';

            if(todo.completed === true){
                todoTextWithCompletion = ' [x] ' + todo.todoText
            } else {
                todoTextWithCompletion = ' [ ] ' + todo.todoText
            }
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
}
view.displayTodos();