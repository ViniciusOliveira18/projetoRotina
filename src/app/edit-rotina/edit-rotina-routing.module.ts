import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRotinaPage } from './edit-rotina.page';

const routes: Routes = [
  {
    path: '',
    component: EditRotinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRotinaPageRoutingModule {}
