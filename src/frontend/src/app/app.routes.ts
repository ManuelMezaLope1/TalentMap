import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { Registro } from './components/auth/registro/registro';
import { Preguntas } from './components/preguntas/preguntas';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: Registro },
    { path: 'preguntas', component: Preguntas, canActivate: [AuthGuard], data: { roles: ['ROLE_USER']} }
];