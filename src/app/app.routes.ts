import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { WrongPathUrlComponent } from '../pages/wrong-path-url/wrong-path-url.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { EmployeesComponent } from '../pages/employees/employees.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  },
  {
    path: 'Dashboard',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  },
  {
    path: 'employee',
    component: EmployeesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'WrongPathURL', component: WrongPathUrlComponent },
  { path: '**', redirectTo: 'WrongPathURL' },
];
