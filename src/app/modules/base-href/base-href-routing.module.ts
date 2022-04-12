import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseHrefComponent } from './base-href.component';

const routes: Routes = [{ path: '', component: BaseHrefComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseHrefRoutingModule { }
