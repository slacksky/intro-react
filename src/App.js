import React from "react";
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
//import logo from './logo.svg';
//import './App.css';

const defaultTodos= [
  {text: 'trabajar en el AzureAngel', completed: false},
  {text: 'tunear  motor electrico', completed: false},
  {text: 'instalar extensor de rango', completed: false}
];


function App() {
  const [todos, setTodos]= React.useState(defaultTodos); 
  const  [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed ).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1 ){

    searchedTodos=todos;

  }else{

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const   completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];//injected todo array?
    newTodos[todoIndex].completed = true; //shorter way
    setTodos(newTodos);


    //todos[todoIndex] = {
    //  text: todos[todoIndex].text,
    //  completed: true,
    //};//alternative way to find completed todos 
  };


  const   deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); 
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
    
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
    
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
    
      <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed} 
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
      />
      ))}
      </TodoList>

   <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
