import React from 'react';
import LlistatTasques from './LlistatTasques';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="fw-bold">Gestor de Tasques</h1>
      </header>
      <LlistatTasques />
    </div>
  );
}

export default App;
