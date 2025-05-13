import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StaticDataComponent } from './pages/staticData/staticData.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'static-data', component: StaticDataComponent },
];