import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgClassRoutingModule } from './ng-class-routing.module';
import { NgClassComponent } from './ng-class.component';


@NgModule({
  declarations: [
    NgClassComponent
  ],
  imports: [
    CommonModule,
    NgClassRoutingModule
  ]
})
export class NgClassModule { }
