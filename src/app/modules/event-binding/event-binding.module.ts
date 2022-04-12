import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventBindingRoutingModule } from './event-binding-routing.module';
import { EventBindingComponent } from './event-binding.component';


@NgModule({
  declarations: [
    EventBindingComponent
  ],
  imports: [
    CommonModule,
    EventBindingRoutingModule
  ]
})
export class EventBindingModule { }
