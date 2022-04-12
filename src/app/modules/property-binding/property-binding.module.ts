import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyBindingRoutingModule } from './property-binding-routing.module';
import { PropertyBindingComponent } from './property-binding.component';


@NgModule({
  declarations: [
    PropertyBindingComponent
  ],
  imports: [
    CommonModule,
    PropertyBindingRoutingModule
  ]
})
export class PropertyBindingModule { }
