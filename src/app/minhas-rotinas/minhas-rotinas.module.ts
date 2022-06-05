import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasRotinasPageRoutingModule } from './minhas-rotinas-routing.module';

import { MinhasRotinasPage } from './minhas-rotinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasRotinasPageRoutingModule
  ],
  declarations: [MinhasRotinasPage]
})
export class MinhasRotinasPageModule {}
