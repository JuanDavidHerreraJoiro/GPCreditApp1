import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../layout/material.module';
import { PrimengModule } from '../layout/primeng.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    PrimengModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
