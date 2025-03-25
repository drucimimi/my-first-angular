import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {FormBuilder} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatCheckboxModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test App';
  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    useAngularComponents: false,
    createOwnComponents: false,
    createOwnRoutes: false,
  });
}
