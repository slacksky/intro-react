import React from "react";

import { TodoProvider } from "../TodoContext";

import { AppUI } from "./AppUI";

import {useLocalStorage} from '../TodoContext/useLocalStorage';

//import logo from './logo.svg';
//import './App.css';

/*const defaultTodos= [
  {text: 'trabajar en el AzureAngel', completed: false},
  {text: 'tunear  motor electrico', completed: false},
  {text: 'instalar extensor de rango', completed: false}
];*/



function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
