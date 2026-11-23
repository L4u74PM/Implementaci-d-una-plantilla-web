import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeroComponent } from './hero/hero.component';
import { HistoriaComponent } from './historia/historia.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HeroComponent },
  { path: 'personajes', component: CharactersComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'inicio' },
];
