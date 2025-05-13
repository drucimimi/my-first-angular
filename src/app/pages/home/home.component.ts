import { Component, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [MatCheckboxModule]
})
export class HomeComponent {
  
  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    useAngularComponents: false,
    createOwnComponents: false,
    createOwnRoutes: false,
  });

}