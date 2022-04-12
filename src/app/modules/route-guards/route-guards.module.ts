import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteGuardsRoutingModule } from './route-guards-routing.module';
import { RouteGuardsComponent } from './route-guards.component';


@NgModule({
  declarations: [
    RouteGuardsComponent
  ],
  imports: [
    CommonModule,
    RouteGuardsRoutingModule
  ]
})
export class RouteGuardsModule { }
