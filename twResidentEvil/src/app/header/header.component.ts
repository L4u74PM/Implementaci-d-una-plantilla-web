import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
@Component({
  standalone:true,
  imports: [NavComponent],
  selector: 'app-header',
  styles: ``,
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
