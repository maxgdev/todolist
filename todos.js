// It should store the todos array on an object
var todoList = {
    // empty array for addTodo objects
    todos: [],
    displayTodos: function(){
        if(this.todos.length === 0){
            console.log('Your Todo List is EMPTY!');

        } else {
            for(var i=0; i < this.todos.length; i++){
                if(this.todos[i].completed === true){
                    console.log ("[x] : "+i+ ' todoText: ' + this.todos[i].todoText);

                } else {
                    console.log ("[ ] : "+i+ ' todoText: ' + this.todos[i].todoText);
                }
            }
            console.log('-------------------------------');
        }
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
    },
    toggleAll: function(){
        // .toggleAll: if everthing's true, make everything false
        // .toggleAll: Otherwise, make everything true
        var totalTodos = this.todos.length; // total no# of todos
        var completedTodos = 0; //count how many are complete
        // let's loop through and count completedTodos
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
        this.displayTodos();
    }
}

// It should have a function to display todos
todoList.displayTodos();

// It should have a function to add new todos
todoList.addTodo('first todo');
todoList.addTodo('second todo');
todoList.addTodo('third todo');
todoList.addTodo('last todo');

// It should have a function to change a todo
todoList.changeTodo(3, 'ChangedTodo - Final todo!');

// todoList.toggleCompleted should change the completed property
todoList.toggleCompleted(0);
todoList.toggleCompleted(3);

// It should have a function to delete a todo
todoList.deleteTodo(3);

// lets toggleAll
todoList.toggleAll();
todoList.toggleAll();


/* V8 Requirements code */
var handlers = {
    displayTodos: function(){
        console.log('displayTodosBtn Clicked');
        todoList.displayTodos();
        view.displayTodos();
    },
    addTodo: function(){
        console.log('addTodo Clicked');
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        // console.log(addTodoTextInput.value);
       todoList.addTodo(addTodoTextInput.value);
       addTodoTextInput.value = '';
    },
    changeTodo: function(){
        console.log('changeTodo Clicked');
        var changeTodoPosition = document.getElementById('changeTodoPosition');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        //console.log(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
        changeTodoPosition.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function(){
        console.log('deleteTodo Clicked');
        var deleteTodoPosition = document.getElementById('deleteTodoPosition');
        todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
        deleteTodoPosition.value = '';
    },
    toggleCompleted: function(){
        console.log('toggleCompleted Clicked');
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
    },
    toggleAll: function(){
        console.log('toggleAllBtn Clicked');
        todoList.toggleAll();
    }
    
}

// Exit the console
var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul'); // find UL element
        todosUl.innerHTML = ''; // clear ul element before loop
        for(var i=0; i< todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            todoLi.textContent = todoList.todos[i].todoText;
            todosUl.appendChild(todoLi);

        }
    }
}
view.displayTodos();