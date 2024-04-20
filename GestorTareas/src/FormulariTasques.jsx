import React, { useState } from 'react';

function FormulariTasques({ funcAfegirTasca }) {
    const [textTasca, setTextTasca] = useState('');

    const enviarForm = (e) => {
        e.preventDefault();
        if (!textTasca.trim()) return;
        funcAfegirTasca({ titol: textTasca, completada: false });
        setTextTasca('');
    };

    return (
        <form onSubmit={enviarForm} className="d-flex justify-content-center gap-2">
            <input
                type="text"
                value={textTasca}
                onChange={e => setTextTasca(e.target.value)}
                placeholder="Afegeix una nova tasca"
                className="form-control"
            />
            <button type="submit" className="btn btn-primary">Afegir Tasca</button>
        </form>
    );
}

export default FormulariTasques;
