import React from "react";
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
//import logo from './logo.svg';
//import './App.css';

const todos= [
  {text: 'trabajar en el AzureAngel', completed: false},
  {text: 'tunear  motor electrico', completed: false},
  {text: 'instalar extensor de rango', completed: false}
];


function App() {
  return (
    <React.Fragment>
    
      <TodoCounter />
      
    
      <TodoSearch />
      
    
      <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text}/>
      ))}
      </TodoList>

   <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
