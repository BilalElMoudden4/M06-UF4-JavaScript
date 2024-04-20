import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

function Tasca({ id, text, completada, completarTasca, eliminarTasca }) {
    return (
        <div onClick={() => completarTasca(id)} className={`d-flex justify-content-between align-items-center p-2 ${completada ? 'bg-success text-decoration-line-through' : 'bg-light'}`}>
            <span className="flex-grow-1 ms-2">{text}</span>
            <button onClick={(e) => {
                e.stopPropagation();
                eliminarTasca(id);
            }} className="btn btn-danger btn-sm">
                <AiOutlineDelete />
            </button>
        </div>
    );
}

export default Tasca;
