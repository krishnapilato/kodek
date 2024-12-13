import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { QuizDashboardComponent } from './quiz-dashboard/quiz-dashboard.component';
import { ErrorComponent } from './shared/error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegistrationComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: QuizDashboardComponent },
  { path: '**', component: ErrorComponent }
];