import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VedaComponent } from './veda.component';

const routes: Routes = [
  {
    path:'',
    component:VedaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VedaRoutingModule { }
