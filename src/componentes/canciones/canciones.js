import { useState } from 'react';
import Cancion_buscada from './cancion_buscada';

function Canciones() {
  return (
    <div className="canciones_contenedoir">
        <input type='text'/>
        <div className='lista_canciones'>
            <Cancion_buscada nombre="Vale la pena"/>
        </div>
    </div>
  );
}

export default Canciones;
