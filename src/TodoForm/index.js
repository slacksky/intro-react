import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] =React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel=()=>{
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return (
        <form onSubmit={onSubmit}>
            <label>
                ...Escribe nuevo Todo...
            </label>
            <textarea>
                value={newTodoValue}
                onChange={onChange}
                placeholder="probar los motores y el arranque"
            </textarea>
            <div>
                <button
                type="button"
                onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                type="submit"
                >Agregar</button>
            </div>
        </form>
    );
}

export {TodoForm};