import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    NavMenuComponent,
    SideNavComponent
  ], exports: [
    NavMenuComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    PrimengModule,
  ]
})
export class LayoutModule { }
