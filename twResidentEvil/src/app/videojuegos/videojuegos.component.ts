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
      description: 'El clásico que acuñó el Survival Horror. Jill Valentine y Chris Redfield exploran la mansión Spencer resolviendo enigmas y administrando escasos recursos ante el brote del Virus T.',
      tag: 'Mansión Spencer'
    },
    {
      id: 'juego-re2',
      title: 'Resident Evil 2',
      year: '1998 / Remake 2019',
      description: 'Leon S. Kennedy y Claire Redfield en su primer día de supervivencia en una Raccoon City colapsada por zombis, lickers y el acoso persistente de Mr. X.',
      tag: 'Raccoon City R.P.D.'
    },
    {
      id: 'juego-re3',
      title: 'Resident Evil 3',
      year: '1999 / Remake 2020',
      description: 'La carrera contra el tiempo de Jill Valentine a través de calles desoladas mientras es perseguida por Némesis hasta la detonación del misil de contención.',
      tag: 'Némesis Hunter'
    },
    {
      id: 'juego-re4',
      title: 'Resident Evil 4',
      year: '2005 / Remake 2023',
      description: 'Revolución de la acción en tercera persona sobre el hombro. Leon rescata a la hija del presidente enfrentándose al parásito Las Plagas en un pueblo europeo.',
      tag: 'Las Plagas'
    },
    {
      id: 'juego-re5',
      title: 'Resident Evil 5',
      year: '2009',
      description: 'Cooperativo en la sabana y zonas urbanas de Kijuju. Chris Redfield y Sheva Alomar detienen a Albert Wesker antes del despliegue masivo del virus Uroboros.',
      tag: 'Uroboros'
    },
    {
      id: 'juego-re6',
      title: 'Resident Evil 6',
      year: '2012',
      description: 'Cuatro campañas interconectadas a escala global. Héroes clásicos unen fuerzas ante la amenaza del Virus C y la catástrofe vírica provocada por Neo Umbrella.',
      tag: 'Virus C'
    },
    {
      id: 'juego-re7',
      title: 'Resident Evil 7: Biohazard',
      year: '2017',
      description: 'Regreso a las raíces del terror en primera persona. Ethan Winters se adentra en la plantación de la demente familia Baker, controlada por la cepa del Moho y Eveline.',
      tag: 'Moho / Primera Persona'
    },
    {
      id: 'juego-re8',
      title: 'Resident Evil Village',
      year: '2021',
      description: 'La odisea gótica de Ethan en un pueblo nevado dominado por Madre Miranda, Lady Dimitrescu y los cuatro jerarcas, resolviendo el misterio de la Megamiceta.',
      tag: 'Megamiceta'
    },
    {
      id: 'juego-requiem',
      title: 'Resident Evil: Requiem',
      year: 'Epílogo / Requiem',
      description: 'La clausura de los cabos sueltos biológicos. Operativos veteranos y nuevos reclutas enfrentan la extinción final de los remanentes de Umbrella y The Connections.',
      tag: 'Capítulo Final'
    }
  ];

}
