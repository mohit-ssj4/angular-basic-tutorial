import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModelBindingRoutingModule } from './ng-model-binding-routing.module';
import { NgModelBindingComponent } from './ng-model-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgModelBindingComponent],
  imports: [CommonModule, FormsModule, NgModelBindingRoutingModule],
})
export class NgModelBindingModule {}
