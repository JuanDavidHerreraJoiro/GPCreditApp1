import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { RegistrarClienteComponent } from './pages/registrar-cliente/registrar-cliente.component';
import { ConsultarClienteComponent } from './pages/consultar-cliente/consultar-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/layout/material.module';
import { PrimengModule } from 'src/app/layout/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegistrarClienteComponent,
    ConsultarClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    PrimengModule,
    SharedModule
  ]
})
export class ClienteModule { }
