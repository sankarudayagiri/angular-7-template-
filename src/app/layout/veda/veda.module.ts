import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VedaRoutingModule } from './veda-routing.module';
import { VedaComponent } from './veda.component';

@NgModule({
  declarations: [VedaComponent],
  imports: [
    CommonModule,
    VedaRoutingModule
  ]
})
export class VedaModule { }
