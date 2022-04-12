import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForRoutingModule } from './ng-for-routing.module';
import { NgForComponent } from './ng-for.component';


@NgModule({
  declarations: [
    NgForComponent
  ],
  imports: [
    CommonModule,
    NgForRoutingModule
  ]
})
export class NgForModule { }
