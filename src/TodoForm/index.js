import React from "react"; 
import './ToDoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] =React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(todoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel=()=>{
        setOpenModal(false);
    };

    const onSubmit = () => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return (
        <form onSubmit={onSubmit}>
            <label>
                ...
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