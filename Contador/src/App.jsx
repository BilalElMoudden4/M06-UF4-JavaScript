// App.jsx
import React, { useState } from 'react';
import Button from './button'; // Asegúrate que la ruta es correcta

function App() {
  const [numClics, setNumClics] = useState(0);

  const incrementNum = () => {
    setNumClics(numClics + 1);
    console.log("Incrementando: ", numClics + 1);
  };

  const reiniciarNum = () => {
    setNumClics(0);
    console.log("Reiniciado a 0");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div>
        <div className="text-center mb-2">
          <h1 className="display-1">{numClics}</h1>
        </div>
        <div className="d-flex justify-content-center">
          <Button text="Clic" onClick={incrementNum} esClick={true} />
          <Button text="Reiniciar" onClick={reiniciarNum} esClick={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
