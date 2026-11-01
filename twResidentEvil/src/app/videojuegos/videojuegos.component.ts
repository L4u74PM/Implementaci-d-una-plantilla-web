import { Component } from '@angular/core';
import { Game } from './videojuego.model';
@Component({
  standalone: true,
  imports: [],
  selector: 'app-videojuegos',
  styles: ``,
  templateUrl: './videojuegos.component.html',
})
export class VideojuegosComponent {

  games: Game[] = [
    {
      id: 'juego-re1',
      title: 'Resident Evil',
      year: '1996 / Remake 2002',
      image: '/assets/img/juegos/re1.jpg',
      description: 'El clásico que acuñó el Survival Horror. Jill Valentine y Chris Redfield exploran la mansión Spencer resolviendo enigmas y administrando escasos recursos ante el brote del Virus T.',
      tag: 'Mansión Spencer'
    },
    {
      id: 'juego-re2',
      title: 'Resident Evil 2',
      year: '1998 / Remake 2019',
      image: '/assets/img/juegos/re2.jpg',
      description: 'Leon S. Kennedy y Claire Redfield en su primer día de supervivencia en una Raccoon City colapsada por zombis, lickers y el acoso persistente de Mr. X.',
      tag: 'Raccoon City R.P.D.'
    },
    {
      id: 'juego-re3',
      title: 'Resident Evil 3',
      year: '1999 / Remake 2020',
      image: '/assets/img/juegos/re3.jpg',
      description: 'La carrera contra el tiempo de Jill Valentine a través de calles desoladas mientras es perseguida por Némesis hasta la detonación del misil de contención.',
      tag: 'Némesis Hunter'
    },
    {
      id: 'juego-re4',
      title: 'Resident Evil 4',
      year: '2005 / Remake 2023',
      image: '/assets/img/juegos/re4.jpg',
      description: 'Revolución de la acción en tercera persona sobre el hombro. Leon rescata a la hija del presidente enfrentándose al parásito Las Plagas en un pueblo europeo.',
      tag: 'Las Plagas'
    },
    {
      id: 'juego-re5',
      title: 'Resident Evil 5',
      year: '2009',
      image: '/assets/img/juegos/re5.jpg',
      description: 'Cooperativo en la sabana y zonas urbanas de Kijuju. Chris Redfield y Sheva Alomar detienen a Albert Wesker antes del despliegue masivo del virus Uroboros.',
      tag: 'Uroboros'
    },
    {
      id: 'juego-re6',
      title: 'Resident Evil 6',
      year: '2012',
      image: '/assets/img/juegos/re6.jpg',
      description: 'Cuatro campañas interconectadas a escala global. Héroes clásicos unen fuerzas ante la amenaza del Virus C y la catástrofe vírica provocada por Neo Umbrella.',
      tag: 'Virus C'
    },
    {
      id: 'juego-re7',
      title: 'Resident Evil 7: Biohazard',
      year: '2017',
      image: '/assets/img/juegos/re7.jpg',
      description: 'Regreso a las raíces del terror en primera persona. Ethan Winters se adentra en la plantación de la demente familia Baker, controlada por la cepa del Moho y Eveline.',
      tag: 'Moho / Primera Persona'
    },
    {
      id: 'juego-re8',
      title: 'Resident Evil Village',
      year: '2021',
      image: '/assets/img/juegos/re8.jpg',
      description: 'La odisea gótica de Ethan en un pueblo nevado dominado por Madre Miranda, Lady Dimitrescu y los cuatro jerarcas, resolviendo el misterio de la Megamiceta.',
      tag: 'Megamiceta'
    },
    {
      id: 'juego-requiem',
      title: 'Resident Evil: Requiem',
      year: 'Epílogo / Requiem',
      image: '/assets/img/juegos/re9.jpg',
      description: 'La clausura de los cabos sueltos biológicos. Operativos veteranos y nuevos reclutas enfrentan la extinción final de los remanentes de Umbrella y The Connections.',
      tag: 'Capítulo Final'
    }
  ];

}
