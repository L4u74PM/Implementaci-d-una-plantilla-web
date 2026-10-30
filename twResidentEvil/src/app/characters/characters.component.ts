import { Component } from '@angular/core';
import { Character } from './character.model';
@Component({
  imports: [],
  selector: 'app-characters',
  styles: ``,
  templateUrl: './characters.component.html',
  standalone:true
})
export class CharactersComponent {

      characters: Character[] = [
        {
          id: 1,
          nom: 'Jill Valentine',
          rol: 'Especialista en cerraduras y desactivación',
          affiliation: 'S.T.A.R.S.',
          bio: 'Miembro del equipo Alfa de S.T.A.R.S. y superviviente de la Mansión Spencer y de Némesis.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Vivo'
        },
        {
          id: 2,
          nom: 'Chris Redfield',
          rol: 'Tirador de élite y capitán de operaciones',
          affiliation: 'S.T.A.R.S.',
          bio: 'Ex-miembro de S.T.A.R.S. y fundador de la B.S.A.A., dedicado a combatir el bioterrorismo.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Vivo'
        },
        {
          id: 3,
          nom: 'Claire Redfield',
          rol: 'Activista de derechos humanos en TerraSave',
          affiliation: 'Superviviente',
          bio: 'Hermana de Chris Redfield. Llegó a Raccoon City buscándolo y logró escapar con Sherry Birkin.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Vivo'
        },
        {
          id: 4,
          nom: 'Leon S. Kennedy',
          rol: 'Agente especial de la D.S.O.',
          affiliation: 'Superviviente',
          bio: 'Sobrevivió a su primer día como policía en Raccoon City y fue reclutado como agente federal.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Vivo'
        },
        {
          id: 5,
          nom: 'Ada Wong',
          rol: 'Espía y mercenaria corporativa',
          affiliation: 'Agente',
          bio: 'Misteriosa espía con motivos ocultos, contratada a menudo para robar muestras de virus.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Vivo'
        },
        {
          id: 6,
          nom: 'Rebecca Chambers',
          rol: 'Médico de campo y bioquímica',
          affiliation: 'S.T.A.R.S.',
          bio: 'La integrante más joven del equipo Bravo de S.T.A.R.S. y superviviente de los montes Arklay.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Vivo'
        },
        {
          id: 7,
          nom: 'Albert Wesker',
          rol: 'Capitán de S.T.A.R.S. / Investigador de Umbrella',
          affiliation: 'Umbrella',
          bio: 'Traidor infiltrado en la policía que buscó la evolución forzada mediante virus biológicos.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Fallecido'
        },
        {
          id: 8,
          nom: 'Ashley Graham',
          rol: 'Hija del presidente de EE.UU.',
          affiliation: 'Civil',
          bio: 'Secuestrada por el culto de Los Iluminados en España y rescatada por Leon S. Kennedy.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Vivo'
        },
        {
          id: 9,
          nom: 'Sherry Birkin',
          rol: 'Agente de seguridad nacional',
          affiliation: 'Superviviente',
          bio: 'Hija de William Birkin. Portadora de anticuerpos del Virus G tras sobrevivir en Raccoon City.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Vivo'
        },
        {
          id: 10,
          nom: 'Sheva Alomar',
          rol: 'Agente de la división de África occidental',
          affiliation: 'B.S.A.A.',
          bio: 'Compañera de Chris Redfield en Kijuju durante la misión para detener el virus Uroboros.',
          imatge: 'assets/img/Resident_Evil_logo.png',
          status: 'Vivo'
        }
      ];
}
  

