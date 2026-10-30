import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { CharactersComponent } from './characters/characters.component';
@Component({
  imports: [RouterOutlet, HeaderComponent, HeroComponent, FooterComponent, CharactersComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('twResidentEvil');
}
