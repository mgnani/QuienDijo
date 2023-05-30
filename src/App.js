import './App.scss';
import { useState } from 'react';
import Canciones from './componentes/canciones/canciones/canciones';
import Eventos from './componentes/eventos/eventos';
import img from './img/quien_dijo.png'


function App() {
  const [activeTab, SetActiiveTab] = useState(0);
  return (
    <div className="App">
      <div  className={`contenedor ${activeTab !== 0 ? 'top' : ''}`}>
      <img src={img} alt="logoportada" className="logoportada" />
        {activeTab === 0 ?
          <div className="buttons">
            <input className="buttoneventos" type='button' value="Canciones" onClick={() => SetActiiveTab(1)}/>
            <input className='buttoneventos' type='button' value="Eventos" onClick={() => SetActiiveTab(2)} />
          </div>
          :
          <>
            <input type='button' value="volver" onClick={() => SetActiiveTab(0)} />
          </>
        }
      </div>
      {activeTab === 1 && <Canciones />}
      {activeTab === 2 && <Canciones />}
    </div>
  );
}

export default App;
