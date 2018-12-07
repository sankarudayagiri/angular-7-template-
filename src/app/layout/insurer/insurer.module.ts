import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsurerRoutingModule } from './insurer-routing.module';
import { InsurerComponent } from './insurer.component';

@NgModule({
  declarations: [ InsurerComponent ],
  imports: [
    CommonModule,
    InsurerRoutingModule
  ]
})
export class InsurerModule { }
