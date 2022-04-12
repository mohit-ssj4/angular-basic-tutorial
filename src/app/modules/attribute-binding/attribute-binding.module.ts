import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeBindingRoutingModule } from './attribute-binding-routing.module';
import { AttributeBindingComponent } from './attribute-binding.component';


@NgModule({
  declarations: [
    AttributeBindingComponent
  ],
  imports: [
    CommonModule,
    AttributeBindingRoutingModule
  ]
})
export class AttributeBindingModule { }
