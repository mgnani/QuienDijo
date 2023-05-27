import { useState } from 'react';
import Cancion_buscada from '../cancion_buscada';
import './canciones.scss'
function Canciones() {
  const canciones = [
    {
      nombre: "Vale la pena",
      letra: "Letra 1",
      acordes: "Acordes 1"
    },
    {
      nombre: "Santa fe",
      letra: "Letra 1",
      acordes: "Acordes 1"
    },
    {
      nombre: "Canción 1",
      letra: "Letra 1",
      acordes: "Acordes 1"
    },
  ]
  return (
    <div className="canciones_contenedor">
      <input type='text' />
      <div className='lista_canciones'>
        {canciones.map((cancion, index) => (
          <div key={index} className='cancion'>
            <h2>{cancion.nombre}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Canciones;
