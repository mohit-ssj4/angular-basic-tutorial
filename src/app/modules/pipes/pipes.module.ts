import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { ShortenPipe } from 'src/app/pipes/shorten.pipe';

@NgModule({
  declarations: [PipesComponent, ShortenPipe],
  imports: [CommonModule, PipesRoutingModule],
})
export class PipesModule {}
