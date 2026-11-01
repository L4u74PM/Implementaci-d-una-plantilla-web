import { Component } from '@angular/core';
import { HistoryEvent } from './historia.model';
@Component({
  standalone:true,
  imports: [],
  selector: 'app-historia',
  styles: ``,
  templateUrl: './historia.component.html',
})
export class HistoriaComponent {
  historyEvents: HistoryEvent[] = [
    {
      year: 'Julio de 1998',
      title: 'El Incidente de la Mansión Spencer',
      description: 'Tras una serie de homicidios caníbales en las montañas Arklay, la unidad especial S.T.A.R.S. queda atrapada en una mansión que oculta un laboratorio clandestino de Umbrella. Jill Valentine y Chris Redfield descubren la traición de Albert Wesker y neutralizan el prototipo Tyrant.',
      gameId: 'juego-re1',
      gameName: 'Resident Evil 1'
    },
    {
      year: 'Septiembre de 1998',
      title: 'La Caída de Raccoon City y el Virus G',
      description: 'El virólogo William Birkin es tiroteado en los laboratorios subterráneos y se inyecta su propio virus G antes de fallecer, liberando muestras de virus T en las alcantarillas. Leon S. Kennedy y Claire Redfield sobreviven a la comisaría sitiada y escapan junto a Sherry Birkin.',
      gameId: 'juego-re2',
      gameName: 'Resident Evil 2'
    },
    {
      year: 'Septiembre - Octubre de 1998',
      title: 'La Fuga de Raccoon City y el Arma Némesis',
      description: 'Jill Valentine intenta escapar de la urbe en ruinas mientras es perseguida sin descanso por Némesis, un arma biológica programada para exterminar a los supervivientes de S.T.A.R.S. El gobierno estadounidense culmina la crisis vaporizando la ciudad mediante un misil de esterilización.',
      gameId: 'juego-re3',
      gameName: 'Resident Evil 3'
    },
    {
      year: 'Otoño de 2004',
      title: 'El Culto de Los Iluminados y Las Plagas',
      description: 'Leon S. Kennedy viaja a una zona rural de España para rescatar a Ashley Graham. El origen de la amenaza es un organismo parásito ancestral conocido como Las Plagas, que somete a la población bajo el mandato del líder del culto, Osmund Saddler.',
      gameId: 'juego-re4',
      gameName: 'Resident Evil 4'
    },
    {
      year: '2009',
      title: 'La Crisis de Kijuju y el Proyecto Uroboros',
      description: 'Chris Redfield y Sheva Alomar investigan a la farmacéutica Tricell en África occidental bajo el amparo de la B.S.A.A. La operación frustra los planes de Albert Wesker de dispersar el virus Uroboros en la atmósfera para provocar una selección biológica forzada.',
      gameId: 'juego-re5',
      gameName: 'Resident Evil 5'
    },
    {
      year: '2012 - 2013',
      title: 'El Bioterrorismo Global del Virus C y Neo Umbrella',
      description: 'Atentados víricos simultáneos en Europa del Este, Estados Unidos y la costa de China ponen al mundo al borde del colapso. Leon, Chris, Ada Wong y Jake Muller cruzan sus caminos para detener las armas bio-orgánicas desarrolladas a partir del Virus C.',
      gameId: 'juego-re6',
      gameName: 'Resident Evil 6'
    },
    {
      year: '2017',
      title: 'El Incidente Dulvey y la Serie E de Conexiones',
      description: 'Ethan Winters acude a una plantación abandonada en Luisiana siguiendo el rastro de su esposa desaparecida. Allí cae en manos de la familia Baker, dominada y mutada por las esporas del Moho y el control mental del arma bio-orgánica infantil Eveline.',
      gameId: 'juego-re7',
      gameName: 'Resident Evil 7: Biohazard'
    },
    {
      year: '2021',
      title: 'La Megamiceta en las Montañas del Este Europeo',
      description: 'Tras el secuestro de su hija Rose, Ethan llega a un pueblo remoto controlado por Madre Miranda y sus cuatro jerarcas. Las indagaciones destapan el origen primigenio del hongo Megamiceta y su influencia directa en las investigaciones iniciales de Oswell E. Spencer.',
      gameId: 'juego-re8',
      gameName: 'Resident Evil Village'
    },
    {
      year: 'Epílogo / Secuelas',
      title: 'El Requiem: Las Cenizas del Bioterrorismo',
      description: 'Frente a la diseminación de remanentes víricos y laboratorios clandestinos por todo el globo, operativos veteranos y nuevos reclutas coordinan la intervención final para erradicar las últimas redes surgidas de las cenizas de Umbrella.',
      gameId: 'juego-requiem',
      gameName: 'Resident Evil: Requiem'
    }
  ]
}
