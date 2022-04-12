import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterpolationRoutingModule } from './interpolation-routing.module';
import { InterpolationComponent } from './interpolation.component';


@NgModule({
  declarations: [
    InterpolationComponent
  ],
  imports: [
    CommonModule,
    InterpolationRoutingModule
  ]
})
export class InterpolationModule { }
