import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-wrapper',
  templateUrl: './button-wrapper.component.html',
  styleUrls: ['./button-wrapper.component.scss']
})
export class ButtonWrapperComponent {
  @Input() gutterTop = 0;

  get paddingTop(): string {
    return `${this.gutterTop * 8}px`;
  }
}
