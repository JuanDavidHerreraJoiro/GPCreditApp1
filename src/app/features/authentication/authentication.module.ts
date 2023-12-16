import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './sesion/pages/login/login.component';
import { MaterialModule } from 'src/app/layout/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/layout/primeng.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    MaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class AuthenticationModule { }
