import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',     component: HomeComponent },
  { path:'login', component: LoginComponent} 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
