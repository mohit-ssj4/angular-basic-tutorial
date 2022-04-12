import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIfRoutingModule } from './ng-if-routing.module';
import { NgIfComponent } from './ng-if.component';


@NgModule({
  declarations: [
    NgIfComponent
  ],
  imports: [
    CommonModule,
    NgIfRoutingModule
  ]
})
export class NgIfModule { }
