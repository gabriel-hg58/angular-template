import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [NotFoundComponent, UnauthorizedComponent],
  imports: [CommonModule, MatButtonModule, RouterModule],
  exports: [NotFoundComponent, UnauthorizedComponent]
})
export class ErrorsModule { }
