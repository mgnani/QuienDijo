import { useState } from 'react';

function Cancion_buscada(props) {
  return (
    <div className="opcion_cancion">
        <h3>{props.nombre}</h3>
    </div>
  );
}

export default  Cancion_buscada;
