import './App.css';
import logoCabecera from './imagenes/fcclogo.png';
import Boton from './components/boton';
import Contador from './components/contador.jsx'
import { useState } from 'react'


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 5);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
          className="logo"
          src={logoCabecera}
          alt="logo"
        />
        <Contador numClics={numClics} />
        <div className='contenedor-principal'>
          <Boton
            texto="clic"
            esBotonDeClic={true}
            manejarClic={manejarClic}
             />
          <Boton
            texto="reiniciar"
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
             />

        </div>
      </div>
    </div>
  );
}

export default App;
