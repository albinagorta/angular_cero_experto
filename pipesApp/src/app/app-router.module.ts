import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { Error404Component } from './error/pages/error404/error404.component';


const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: '**',
    component: Error404Component
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
