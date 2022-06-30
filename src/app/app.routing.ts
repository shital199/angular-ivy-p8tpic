import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './helpers';

const routes: Routes = [
  { path: '', component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },

  //redirect to home
  { path: '**', redirectTo:''}
];

export const appRoutingModule = RouterModule.forRoot(routes);