import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDadosCadastraisPage } from './edit-dados-cadastrais.page';

const routes: Routes = [
  {
    path: '',
    component: EditDadosCadastraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDadosCadastraisPageRoutingModule {}
