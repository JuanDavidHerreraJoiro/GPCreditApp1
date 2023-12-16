import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarClienteComponent } from './pages/consultar-cliente/consultar-cliente.component';
import { RegistrarClienteComponent } from './pages/registrar-cliente/registrar-cliente.component';
import { tokenValidationGuard } from 'src/app/core/authentication/Guards/token-validation.guard';
import { sesionGuard } from 'src/app/core/authentication/Guards/sesion.guard';

const routes: Routes = [
  {
    path: "consultar-cliente",
    component: ConsultarClienteComponent,
    canActivate: [ tokenValidationGuard, sesionGuard ],
    data: {
      role: 'Admin'
    }
  },
  {
    path: "registrar-cliente",
    component: RegistrarClienteComponent,
    canActivate: [ sesionGuard ],
    data: {
      role: 'Admin'
    }
  },
  {
    path: '**',
    redirectTo: 'consultar-cliente'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
