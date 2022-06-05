import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRotinaPageRoutingModule } from './edit-rotina-routing.module';

import { EditRotinaPage } from './edit-rotina.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditRotinaPageRoutingModule
  ],
  declarations: [EditRotinaPage]
})
export class EditRotinaPageModule {}
