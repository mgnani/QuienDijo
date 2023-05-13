import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Canciones from './componentes/canciones/canciones';
import Eventos from './componentes/eventos/eventos';
function App() {
  const [activeTab, SetActiiveTab] = useState(0);
  return (
    <div className="App">
      <div>
        {activeTab === 0 ?
          <>
            <input type='button' value="Canciones" onClick={() => SetActiiveTab(1)} />
            <input type='button' value="Eventos" onClick={() => SetActiiveTab(2)} />
          </>
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
