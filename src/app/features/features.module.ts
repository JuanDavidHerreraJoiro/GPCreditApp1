import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../layout/material.module';
import { PrimengModule } from '../layout/primeng.module';
import { ClientHomeComponent } from './pages/client-home/client-home.component';



@NgModule({
  declarations: [
    HomeComponent,
    ClientHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PrimengModule,
    FeaturesRoutingModule,
    LayoutModule,
    FlexLayoutModule
  ]
})
export class FeaturesModule { }
