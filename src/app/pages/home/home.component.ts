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

  tasks = this._formBuilder.group({
    useAngularComponents: localStorage.getItem('useAngularComponents') ?? false,
    createOwnComponents: localStorage.getItem('createOwnComponents') ?? false,
    createOwnRoutes: localStorage.getItem('createOwnRoutes') ?? false,
    createStaticDataPage: localStorage.getItem('createStaticDataPage') ?? false,
    createPublicAPIDataPage : localStorage.getItem('createPublicAPIDataPage') ?? false,
    createPrivateAPIDataPage : localStorage.getItem('createPrivateAPIDataPage') ?? false,
    testAppComponents: localStorage.getItem('testAppComponents') ?? false
  });

  isChecked(name:string) : boolean{
    return this.tasks.get(name)?.value
  }

  onCheckboxChange(name:string, checked: boolean): void {
    this.tasks.get(name)?.setValue(checked ? true : false)
    localStorage.setItem(name, this.tasks.get(name)?.value)
  }

}