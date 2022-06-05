import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosCadastraisPage } from './dados-cadastrais.page';

const routes: Routes = [
  {
    path: '',
    component: DadosCadastraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosCadastraisPageRoutingModule {}
