import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rotina',
    loadChildren: () => import('./rotina/rotina.module').then( m => m.RotinaPageModule)
  },
  {
    path: 'edit-rotina/:id',
    loadChildren: () => import('./edit-rotina/edit-rotina.module').then( m => m.EditRotinaPageModule)
  },
  {
    path: 'dados-cadastrais',
    loadChildren: () => import('./dados-cadastrais/dados-cadastrais.module').then( m => m.DadosCadastraisPageModule)
  },
  {
    path: 'edit-dados-cadastrais',
    loadChildren: () => import('./edit-dados-cadastrais/edit-dados-cadastrais.module').then( m => m.EditDadosCadastraisPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'minhas-rotinas',
    loadChildren: () => import('./minhas-rotinas/minhas-rotinas.module').then( m => m.MinhasRotinasPageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
