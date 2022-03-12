import React from "react";
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
//import logo from './logo.svg';
//import './App.css';

const defaultTodos= [
  {text: 'trabajar en el AzureAngel', completed: true},
  {text: 'tunear  motor electrico', completed: true},
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
        completed={todo.completed} />
      ))}
      </TodoList>

   <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
