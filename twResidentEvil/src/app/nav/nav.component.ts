import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-nav',
  styles: ``,
  templateUrl: './nav.component.html',
})
export class NavComponent {
  readonly active = 'text-red-500 font-semibold';
}
