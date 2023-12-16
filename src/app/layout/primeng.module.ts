import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SpeedDialModule } from 'primeng/speeddial';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    AvatarModule,
    CardModule,
    DynamicDialogModule,
    MessagesModule,
    MessageModule,
    SpeedDialModule,
    TabViewModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    DropdownModule,
    InputNumberModule,
    AvatarModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    TableModule
  ]
})
export class PrimengModule { }
