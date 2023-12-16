import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { sesionGuard } from '../core/authentication/Guards/sesion.guard';
import { ClientHomeComponent } from './pages/client-home/client-home.component';
import { tokenValidationGuard } from '../core/authentication/Guards/token-validation.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../features/authentication/authentication.module').then(m => m.AuthenticationModule),
        canActivate: [ sesionGuard ]
      },
      {
        path: 'cliente',
        loadChildren: () => import('../features/cliente/cliente.module').then(m => m.ClienteModule),
      },
      {
        path: 'inicio-cliente',
        component: ClientHomeComponent,
        canActivate: [ sesionGuard ],
        data: {
          role: 'Client'
        }
      },
      {
        path: '**',
        redirectTo: 'auth'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
