import React, { useState } from 'react';
import Tasca from './Tasca';
import FormulariTasques from './FormulariTasques';

function LlistatTasques() {
    const [tasques, setTasques] = useState([]);

    const afegirTasca = (tasca) => {
        setTasques(tasques => [...tasques, tasca]);
    };

    const eliminarTasca = (id) => {
        setTasques(tasques => tasques.filter((tasca, index) => index !== id));
    };

    const completarTasca = (id) => {
        setTasques(tasques => tasques.map((tasca, index) => {
            if (index === id) {
                return {...tasca, completada: !tasca.completada};
            }
            return tasca;
        }));
    };

    return (
        <div>
            <h1>Llista de Tasques</h1>
            <FormulariTasques funcAfegirTasca={afegirTasca} />
            {tasques.map((tasca, index) => (
                <Tasca
                    key={index}
                    id={index}
                    text={tasca.titol}
                    completada={tasca.completada}
                    completarTasca={completarTasca}
                    eliminarTasca={eliminarTasca}
                />
            ))}
        </div>
    );
}

export default LlistatTasques;
