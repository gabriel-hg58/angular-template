import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BaseCardComponent } from './base-card/base-card.component';
import { ButtonWrapperComponent } from './button-wrapper/button-wrapper.component';

@NgModule({
  declarations: [BaseCardComponent, ButtonWrapperComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTooltipModule],
  exports: [BaseCardComponent, ButtonWrapperComponent]
})
export class ComponentsModule { }
