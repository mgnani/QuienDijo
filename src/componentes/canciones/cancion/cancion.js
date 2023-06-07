import React, { useState } from 'react';
import './cancion.scss'
import { InputSwitch } from "primereact/inputswitch";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Cancion({ nombre, letra, acordes }) {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="cancion" onClick={handleClick}>

      <div className="cancion_text" >
        - {nombre}
      </div>
      {show && <pre>{letra}</pre>}
    </div>
  );
}

export default Cancion;
