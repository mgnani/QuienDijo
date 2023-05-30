import { useState } from 'react';
import Cancion_buscada from '../cancion_buscada';
import './canciones.scss'
import Cancion from '../cancion/cancion';
function Canciones() {
  const canciones = [
    {
      nombre: "Arriesgado",
      letra: `CAPO EN 2
      Intro G-Em-C-D X2 
      
      G.              D.               C
      100 días tirado por ahí 
      G.              D.               C
      50 noches de flojera
      G.          B7.                      Em 
      Si navegue en una pecera, 
      C
      mí vida entera
      G.                                       D 
      Corro el riesgo de ahogarme
      
      G.                         D.                     C 
       *_Desde santa fe hasta la plata 
      G.              D.               C
      No vas a tener lo que te falta
      Em.                D.                   C. 
      Si la libertad nos da un beso 
      Am.                               C 
      No te olvides que no hay nada 
      D 
      como eso_* 
      
      Intro G-Em-C-D X2 
      
      Em.              D.                   C 
      Pasaron días de tormenta
      Em.            D.                 C 
      Desde que cerre la puerta 
      D
      Para los dos
      
      G.              D.               C
       *_Desde santa fe hasta la plata 
      G.              D.               C
      No vas a tener lo que te falta
      Em.            D.                 C 
      Si la libertad nos dan un beso 
      Am.                               C
      No te olvides que no hay nada 
      D
      como eso*_
      
      Intro G-Em-C-D X4`,
      acordes: "Acordes 1"
    },
    {
      nombre: "Vueltas",
      letra: `
      D.        A.     G 
      Basta con mirar
      D
      tu cara de quimera
      G.                               Bm A
      es que ya no hay manera de escapar
      D.               A.              G 
      Yo dejé de ver en la luna tu 
      D
      rostro
      G.                      Bm 
      Desde el 15 de agosto no la 
      A
      veo más
      
      G.               A.               Bm 
      Hoy que va a llover en mi 
      E
      habitación
      G.                        A
      Hasta que amanezca
      
      
      D.               A.              G 
      Desde acá se ven cosas que 
      D
      no esperaba
      G.                             Bm 
      Que sin pedirme nada lo 
      A
      queres
      
      D.               A.              G 
      Uno espera más de lo que 
      D
      quieren darle
      G.                                      Bm
      Y cree que es importante una 
      A 
      boludez
      
      G.                        A.               Bm 
      Hoy que el corazón no deja de 
      E
      latir 
      G.                                           A
      Hay mas sangre en mis venas
      
      D.                A.               
      Vueltas me quedo dando 
      Bm.             F#m
      vueltas
      G.                               D.      
      Pensando en muy poco la verdad 
      G.                  A.         D
      Hasta explotar
      
      Solo sobre acordes de estrofa 
      
      G.                        A.               Bm 
      Hoy que el corazón no deja de 
      E
      latir 
      G.                                           A
      Hay mas sangre en mis venas
      
      D.                A.               
      Vueltas me quedo dando 
      Bm.             F#m
      vueltas
      G.                               D.      
      Pensando en muy poco la verdad 
      G.                  A.         D
      Hasta explotar
      D.                A.               
      Vueltas mi vida es una
      Bm.             F#m
      vuelta
      G.                               D.      
      Que no va a parar de girar
      G.                  A.         
      Me voy a marear 
      
      C-G-D x3
      A
      
      D.                A.               
      Vueltas me quedo dando 
      Bm.             F#m
      vueltas
      G.                               D.      
      Pensando en muy poco la verdad 
      G.                  A.         D
      Hasta explotar
      D.                A.               
      Vueltas mi vida es una
      Bm.             F#m
      vuelta
      G.                               D.      
      Que no va a parar de girar
      G.                  A.              D  
      Me voy a marear`,
      acordes: "Acordes 1"
    },
    {
      nombre: "Santa fe",
      letra: `CAPO EN 2
      Intro G-Em-C-D X2 
      
      G.              D.               C
      100 días tirado por ahí 
      G.              D.               C
      50 noches de flojera
      G.          B7.                      Em 
      Si navegue en una pecera, 
      C
      mí vida entera
      G.                                       D 
      Corro el riesgo de ahogarme
      
      G.                         D.                     C 
       *_Desde santa fe hasta la plata 
      G.              D.               C
      No vas a tener lo que te falta
      Em.                D.                   C. 
      Si la libertad nos da un beso 
      Am.                               C 
      No te olvides que no hay nada 
      D 
      como eso_* 
      
      Intro G-Em-C-D X2 
      
      Em.              D.                   C 
      Pasaron días de tormenta
      Em.            D.                 C 
      Desde que cerre la puerta 
      D
      Para los dos
      
      G.              D.               C
       *_Desde santa fe hasta la plata 
      G.              D.               C
      No vas a tener lo que te falta
      Em.            D.                 C 
      Si la libertad nos dan un beso 
      Am.                               C
      No te olvides que no hay nada 
      D
      como eso*_
      
      Intro G-Em-C-D X4`,
      acordes: "Acordes 1"
    },
    {
      nombre: "Vueltas",
      letra: `D.               A.              G 
      Basta con mirar tu cara de 
      D
      quimera
      G.                               Bm
      es que ya no hay manera de 
      A 
      escapar
      
      D.               A.              G 
      Yo dejé de ver en la luna tu 
      D
      rostro
      G.                      Bm 
      Desde el 15 de agosto no la 
      A
      veo más
      
      G.               A.               Bm 
      Hoy que va a llover en mi 
      E
      habitación
      G.                        A
      Hasta que amanezca
      
      
      D.               A.              G 
      Desde acá se ven cosas que 
      D
      no esperaba
      G.                             Bm 
      Que sin pedirme nada lo 
      A
      queres
      
      D.               A.              G 
      Uno espera más de lo que 
      D
      quieren darle
      G.                                      Bm
      Y cree que es importante una 
      A 
      boludez
      
      G.                        A.               Bm 
      Hoy que el corazón no deja de 
      E
      latir 
      G.                                           A
      Hay mas sangre en mis venas
      
      D.                A.               
      Vueltas me quedo dando 
      Bm.             F#m
      vueltas
      G.                               D.      
      Pensando en muy poco la verdad 
      G.                  A.         D
      Hasta explotar
      
      Solo sobre acordes de estrofa 
      
      G.                        A.               Bm 
      Hoy que el corazón no deja de 
      E
      latir 
      G.                                           A
      Hay mas sangre en mis venas
      
      D.                A.               
      Vueltas me quedo dando 
      Bm.             F#m
      vueltas
      G.                               D.      
      Pensando en muy poco la verdad 
      G.                  A.         D
      Hasta explotar
      D.                A.               
      Vueltas mi vida es una
      Bm.             F#m
      vuelta
      G.                               D.      
      Que no va a parar de girar
      G.                  A.         
      Me voy a marear 
      
      C-G-D x3
      A
      
      D.                A.               
      Vueltas me quedo dando 
      Bm.             F#m
      vueltas
      G.                               D.      
      Pensando en muy poco la verdad 
      G.                  A.         D
      Hasta explotar
      D.                A.               
      Vueltas mi vida es una
      Bm.             F#m
      vuelta
      G.                               D.      
      Que no va a parar de girar
      G.                  A.              D  
      Me voy a marear`,
      acordes: "Acordes 1"
    },
    {
      nombre: "Carolina",
      letra: `D.                                     Bm
      Te busque y no te encontré
      D                                                  Bm 
      Es un camino que yo no quise hacer
                           Em 
      Pero nos falta un paso
      G.                                             D.          A
      Sacarnos los zapatos y a correr.     
      
      D.                                     Bm
      Se hace de día y estoy con vos
      D.                                     Bm
      Pero no como quiero estar yo 
                            Em
      Seguí buscando me dijo 
      G.                                            D.               A
      Y yo voy a buscarla hasta el final.      
      
      
      
      Estribillo
      G.                             A                   Bm.                 F#m 
       Siempre estuve y nunca tuve esa parte de ti
      G.                             A                   Bm.                 F#m 
      Con el frío entre las piernas a casa hay que llegar
                      G.                    A                 D 
      Se hace largo el camino sin tu vos
      
      
      
      D.                                     Bm
       Dios opaco y sin iluminación
      D.                                     Bm
      Vos pidiendo que cante tu canción
                          Em 
      Porque yo soy como un gato
                G.                                          D.              A 
       que ronda los tejados sin dormir.             
      
      D.                                     Bm
       Inexperto sin  una direccion
      D.                                     Bm
      Indeciso con una decisión
                          Em
      Vos prepara lo que falte 
                        G.                                       A 
      Que yo prendo luz, cámara y accion        
      
      
      Estribillo
      G.                             A                   Bm.                 F#m 
       Siempre estuve y nunca tuve esa parte de ti
      G.                             A                   Bm.                 F#m 
      Con el frío entre las piernas a casa hay que llegar
                      G.                    A                 D.                A 
      Se hace largo el camino sin tu vos
      
      G.                             A                   Bm.                 F#m 
       Siempre estuve y nunca tuve esa parte de ti
      G.                             A                   Bm.                  E 
      Con el frío entre las piernas a casa hay que llegar
                      G.                    A                
      Se hace largo el camino 
                    G.                    A                
      Se hace largo el camino 
                    G.                    A                D A Bm A G A D 
      Se hace largo el camino sin tu vos
      
      D-A-Bm-A-G-A-D`,
      acordes: "No disponible"
    },
    {
      nombre: "Canción 1",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Canción 1",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Canción 1",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Canción 1",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Canción 1",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Canción 1",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Canción 1",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Canción 1",
      letra: "No disponible",
      acordes: "No disponible"
    }, {
      nombre: "Canción 1",
      letra: "No disponible",
      acordes: "No disponible"
    },
  ]
  const [filtro, setFiltro] = useState('');
  const [cancionesFiltradas, setCancionesFiltradas] = useState(canciones);
  const handleFiltroChange = (event) => {
    const valorFiltro = event.target.value;
    setFiltro(valorFiltro);

    const cancionesFiltradas = canciones.filter((cancion) =>
      cancion.nombre.toLowerCase().includes(valorFiltro.toLowerCase())
    );
    setCancionesFiltradas(cancionesFiltradas);
  };
  return (
    <div className="canciones_contenedor">
    <input type="text" value={filtro} onChange={handleFiltroChange} />
    <div className="lista_canciones">
      {cancionesFiltradas.map((cancion, index) => (
        <Cancion key={index} nombre={cancion.nombre} letra={cancion.letra} acordes={cancion.acordes} />
      ))}
    </div>
  </div>
  );
}

export default Canciones;
