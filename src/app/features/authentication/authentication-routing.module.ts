import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sesion/pages/login/login.component';

const routes: Routes = [
  {
    path: "sesion/login",
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'sesion/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
