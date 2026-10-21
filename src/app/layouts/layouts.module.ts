import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { BlankComponent } from './blank/blank.component';
import { FullComponent } from './full/full.component';

@NgModule({
  declarations: [BlankComponent, FullComponent],
  imports: [CommonModule, MatButtonModule, MatToolbarModule, RouterModule],
  exports: [BlankComponent, FullComponent]
})
export class LayoutsModule { }
