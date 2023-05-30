import { useState } from 'react';
import Cancion_buscada from '../cancion_buscada';
import './canciones.scss'
import Cancion from '../cancion/cancion';
function Canciones() {
  const canciones = [
    {
      nombre: "Vale la pena",
      letra: `
      C.               G.                   Am.           F
      Donde estan las melodías 
      C.               G.               Am.        F 
      que compuse algún día
      C.       E.                               Am.       F
      Cada vez que piso el freno 
      C.             G.                             F.           G 
      Me cuesta arrancar de nuevo
      
      
      
      Parte B:
      Dm.           G.                     Am.       Am/G
      Esta noche tour en marte 
      F                               G
      Lo que  hago para no amarte
      
      
      Estribo:
      C                    G.                   Am.                           F
      Vale la pena me preguntó si esto vale la pena 
      C.                   G.                           F.             G 
      disponible solo para nimiedades
      C.                   G.                    Am.                                F
      No es la primera se siente un viento de primavera 
      C.                   G.                           F.              G
      y yo puedo distinguirlo muy bien
      
      
      Estrofa:
      C.               G.                   Am.           F
      Donde estan esa canciones
      C.               G.                   Am.           F
      Que rompen los corazones
      C.       E.                               Am.       F
      Que hora es? Dónde estamos?
      C.             G.                             F.           G 
      Un rato más y ya nos vamos
      
      
      Parte B:
      Dm.           G.                     Am.       Am/G
      Esta noche tour en la luna
      F                               G
      Cómo vos hay ninguna 
      
      Estribo:
      C                    G.                   Am.                           F
      Vale la pena yo sé que ella vale la pena 
      C.                   G.                           F.             G 
      Disponible solo para buscarte
      C.                   G.                    Am.                                F
      Pasan los días todavía no logro que te rías 
      C.                   G.                           F.            Fm
      no hay más nada que vivir asi
      
      Parte C 
      Am.          E/G#.             Am/G.                 F#ø
      Nadie tiene la respuesta para mi pregunta
      F.         C.F.       C.          A 
      Bata ya de mirar al otro
      
      Estribo final 
      D.                       A.                         Bm.               G
      Valdrá la pena me preguntó si esto vale la pena 
      D.                       A.                         G.               A. 
      disponible solo para nimiedades
      D.                       A.                         Bm.               G
      Vuelvo de día las luces siempre están encendidas 
      D.                       A.                         G.               
      trato de no hacer ruido y no despertarte
                      Gm.                               D.        A.         G 
      Cuando vuelvas de alguna parte
                           Gm.              D.           A.         G. 
      Me queda poco para darte
                  Gm.                       D.           A.         G.  
      Ya pasó el tour por marte
                  Gm.                       D.           A.         G 
      Lo que hice para no amarte
                  Gm.              D.      
      No sé si vale la pena`,
      acordes: "No disponible"
    },
    {
      nombre: "Cae la ciudad",
      letra: `
      Intro/ Riff  (G. C.   G.  C.  Em.   A.  C.   D.) 

            G.                  C 
      No sé si estoy despierto
            G.                  C 
      Nose si estoy durmiendo
                Em.          A 
      Sé que son casi las 4 
      C.                        D 
      Hace un día o dos

            G.                  C 
      El mundo está muy lejos 
        G.                  C 
      Apenas puedo  verlo 
              Em.          A 
      Sé que tenés que decirme 
      C.                        D 
      Las cosas como son

      C.             D.             G.      D/F#.   Em   
      Y Cae la ciudad y no puedo imaginar 
      Am                                                             D 
      que todos los que me mintieron digan la verdad


      Intro/ Riff  (G. C.   G.  C.  Em.   A.  C.   D)                 

        

          G.                  C
      No sé si quiero darte lo que yo no di
          G.                  C 
      No sé si me déjaste o yo me fui 
      Em.          A 
      No sé que haceeeer
      C.                 D 
      Toooo davia

      C.             D.             G.      D/F#.   Em   
      Y Cae la ciudad y te quiero ir a buscar 
      Am                                                           D 
      Espero que no sea tarde y te pueda encontrar

      C.                  D.    B7.          Em 
      Vivo sin razon, dónde estoy?
      C.                                      G.                     D 
      Cada vez que miro el cielo me guía el sol 

      C.                  D.    B7.          Em 
      Mi inocencia ganó otra vez
      C.                                      G.                     D 
      Las cosas no son tan fáciles como las ves 
      C.                   G 
      Como las ves


      Intro/ Riff  (G. C.   G.  C.  Em.   A.  C.   D.) 
      (Parte lenta con subida) (Próximo estribo Frenada)


      C.             D.             G.      D/F#.   Em
      Y Cae la ciudad y no puedo imaginar 
      Am                                                              D 
      que todos los que me mintieron digan la verdad

      C.                  D.    B7.          Em 
      Vivo sin razoooon, dónde estoy?
      C.                            G                                  D 
      Cada vez que miro el cielo me guía el sol
      C.                  D.    B7.          Em 
      Mi inocencia ganó otra vez
      C.                                      G.                     D 
      Las cosas no son tan fáciles como las ves 
      C.                G. 
      Como las ves


      Intro/ Riff  (G. C.   G.  C.  Em.   A.  C.   D   G )`,
      acordes: "No disponible"
    },
    {
      nombre: "Arriesgado",
      letra: `
      Intro Em-Bm x4 

      Em.                      Bm 
      Para dónde hay que mirar
      Em.          Bm 
      Si no sabes
      Am.                          Am/F#
      Lo que luego va a pasar 
      B7
      Bajo tus pies
      
      
      Em.                        Bm 
      Sopla un viento desde el sur
      Em.                     Bm 
      Con aires de andar
      Am.                               Am/F#
      Traicionando a mi razón
      B7
       una vez más
      
      G.            Bm 
      Arriesgado
      G.             Bm 
       es arriesgado
      C.                      
      No leer la letra chica
      D
      De la soledad
      
      G.             Bm 
      No me inspiran 
      G.            Bm 
      mis melodías
      C
      Será que desafino
      D 
      Pero sigo cantando
                     
      Sin miedo..
      Em-Bm x2
      
      Em.                        Bm 
      Dominaste mi dolor
      Em.                        Bm 
      Con desinterés
      Am.                     Am/F#
      Pero que vamos a hacer
      B7
      Más que soñar
      
      Em.                        Bm 
      Tengo claro que no sé
      Em.                        Bm 
      Cómo conquistar
      Am.                         Am/F# 
      Lo que el corazón buscó 
      B7 
      Y no pude encontrar
      
      Puente instrumental (no tocar)
      
      G.            Bm
      Arriesgado
      G.            Bm 
       es arriesgado
      C
      No leer la letra chica
      D
      De la soledad
      
      G.                   Bm
      No me inspiran 
      G.                Bm 
      mis melodías
      C
      Será que desafino
      D
      Pero sigo cantando
      
      Sin miedo..
      
      Em-Bm x3. 
      C-D-Em`,
      acordes: "No disponible"
    },
    {
      nombre: "Santa fe",
      letra: `
      CAPO EN 2
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
      acordes: "No disponible"
    },
    {
      nombre: "Carolina",
      letra: `
      D.                                     Bm
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
      nombre: "Divina",
      letra: `
      C-F x2.           
      Am-G.           
      Estrofa
      
      Puente Dm-G x2
      
      Dm-F-G
      
      Estrofa
      C-F x2
      Am-G
      
      Puente
      dm-G x2
      Dm-F-G
      
      
      Estribillo
      C-G-Am-F-G
      C-E-Am-F-G`,
      acordes: "No disponible"
    },
    {
      nombre: "No me arrepiento",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Pretextos",
      letra: `
      LAm DO RE
      FA LAm
      FA MIM`,
      acordes: "No disponible"
    }, {
      nombre: "Lago en el cielo",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Alfonsina y el mar",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Soy mi soberano",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Temprano para terminar",
      letra: `
      G-C-G-D- Em-C-D 
      C- Cm7 -G-D
      
      
      
      
      em-Bm-C-G-Eb-F-G-D
      Estribo 
      G-C-D x2 
      EM-C--G-D-C-D-G`,
      acordes: "No disponible"
    },
    {
      nombre: "11 y 6",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Agape",
      letra: `
      Riff
      D-Am-G-F

      Estrofa
      D-Am-G-F x2

      Puente: Bm- Daug- Bm-7- E ( o E7)

      Estribillo:.
      G-D x2 F#-Bm-A-G-A`,
      acordes: "No disponible"
    },
    {
      nombre: "Vueltas",
      letra: `
      D.               A.              G 
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
      acordes: "No disponible"
    },
    {
      nombre: "Rojo",
      letra: "Bm A D",
      acordes: "No disponible"
    },
    {
      nombre: "Festejar",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Cerca de la revolución",
      letra: "No disponible",
      acordes: "No disponible"
    },
    {
      nombre: "Después de ver",
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
