import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParameterizedRoutesRoutingModule } from './parameterized-routes-routing.module';
import { ParameterizedRoutesComponent } from './parameterized-routes.component';


@NgModule({
  declarations: [
    ParameterizedRoutesComponent
  ],
  imports: [
    CommonModule,
    ParameterizedRoutesRoutingModule
  ]
})
export class ParameterizedRoutesModule { }
