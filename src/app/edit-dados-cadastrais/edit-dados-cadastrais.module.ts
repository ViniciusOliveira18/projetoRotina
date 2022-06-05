import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDadosCadastraisPageRoutingModule } from './edit-dados-cadastrais-routing.module';

import { EditDadosCadastraisPage } from './edit-dados-cadastrais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDadosCadastraisPageRoutingModule
  ],
  declarations: [EditDadosCadastraisPage]
})
export class EditDadosCadastraisPageModule {}
