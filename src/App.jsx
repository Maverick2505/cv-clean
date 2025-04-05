// src/App.jsx
import CVGenerator from './components/client/curriculum/CVGenerator.jsx';
import CVRegistro from './components/client/curriculum/CVRegistro.jsx';
import { useState } from 'react';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="App">
      {showRegister ? <CVRegistro /> : <CVGenerator />}
      
      {/* Botón para alternar entre vistas (opcional) */}
      <button 
        onClick={() => setShowRegister(!showRegister)}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-md"
      >
        {showRegister ? 'Ver Generador' : 'Ver Registro'}
      </button>
    </div>
  );
}

export default App;