import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuNavComponent } from '../menuNav/menuNav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatIconModule, MenuNavComponent]
})
export class HeaderComponent {

}
