import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RotinaPage } from './rotina.page';

const routes: Routes = [
  {
    path: '',
    component: RotinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotinaPageRoutingModule {}
