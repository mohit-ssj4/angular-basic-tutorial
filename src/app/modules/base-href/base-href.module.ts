import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseHrefRoutingModule } from './base-href-routing.module';
import { BaseHrefComponent } from './base-href.component';


@NgModule({
  declarations: [
    BaseHrefComponent
  ],
  imports: [
    CommonModule,
    BaseHrefRoutingModule
  ]
})
export class BaseHrefModule { }
