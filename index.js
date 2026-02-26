
function markAsDone(todos) {
let newTodos = [];
  
  todos.forEach(function(todo) {
    newTodos.push("done - " + todo);
  });
  return newTodos;
}



//should create a function named markAsDone that 
//takes an array of todos and returns a new array containing the modified todo items

//should loop through the todos, using forEach,
//and prepend the string 'done - ' to each todo description

