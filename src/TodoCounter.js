import React from "react";

import './TodoCounter.css';


function TodoCounter({total,completed} ) {
     
    return (
    <h2  className="TodoCounter">Completaste {completed} de {total} TODOs</h2>
    );
}


export { TodoCounter };

