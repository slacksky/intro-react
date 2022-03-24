import React from "react";

import { AppUI } from "./AppUI";

//import logo from './logo.svg';
//import './App.css';

/*const defaultTodos= [
  {text: 'trabajar en el AzureAngel', completed: false},
  {text: 'tunear  motor electrico', completed: false},
  {text: 'instalar extensor de rango', completed: false}
];*/

function useLocalStorage(itemName, initialValue) {
  const [error, setError] =React.useState(false);
  const [loading, setLoading] =React.useState(true);
  const [item, setItem]= React.useState(initialValue);
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;
      

        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }catch(error){
        setError(error);
      }
    },1000);
  });

  

  //const [item, setItem]= React.useState(parsedItem);

  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }catch(error){
      setError(error);
    }

  };


  return {
    item, 
    saveItem, 
    loading,
    error,
  };//react convention over 2  elementes sendin an object is prefered

} //Custom React Hook


function App() {
  const  {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error,
  }= useLocalStorage('TODOS_V1',[]);

  
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
    saveTodos(newTodos);
  };


  const   deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); 
    saveTodos(newTodos);
  };


  return (
    <AppUI 
      error={error}
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      />
  );
}

export default App;
