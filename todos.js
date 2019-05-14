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
        var totalTodos = this.todos.length; // total no# of todos
        var completedTodos = 0; //count how many are complete
        this.todos.forEach(function(todo){
            if(todo.completed === true){
                completedTodos++;
            }
        });
        // is completed todos the same as total todos
        if(completedTodos === totalTodos){
            // make everything false 
            this.todos.forEach(function(todo){
                todo.completed = false;
            });
        } else {
            // make everytrhing true
            this.todos.forEach(function(todo){
                todo.completed = true;
            });
        }
    }
}

// hardwired data entered - DELETE in V11
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
    deleteTodo: function(position){
        todoList.deleteTodo(position);
        // deleteTodoPosition.value = '';
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
        todoList.todos.forEach(function(todo, index){
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if(todo.completed === true){
                todoTextWithCompletion = ' [x] ' + todo.todoText
            } else {
                todoTextWithCompletion = ' [ ] ' + todo.todoText
            }
            todoLi.id = index;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this); // passing 'this' into forEach function
    },
    createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function(){
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event){
            var elementClicked = event.target;
            var deleteTodoClickedId = parseInt(event.target.parentNode.id);
            if (elementClicked.className === 'deleteButton'){
                handlers.deleteTodo(deleteTodoClickedId);
            }    
        })
    }
};

view.displayTodos();
view.setUpEventListeners();
