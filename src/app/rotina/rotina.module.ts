import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RotinaPageRoutingModule } from './rotina-routing.module';

import { RotinaPage } from './rotina.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RotinaPageRoutingModule
  ],
  declarations: [RotinaPage]
})
export class RotinaPageModule {}
