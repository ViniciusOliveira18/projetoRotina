import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosCadastraisPageRoutingModule } from './dados-cadastrais-routing.module';

import { DadosCadastraisPage } from './dados-cadastrais.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    DadosCadastraisPageRoutingModule
  ],
  declarations: [DadosCadastraisPage]
})
export class DadosCadastraisPageModule {}
