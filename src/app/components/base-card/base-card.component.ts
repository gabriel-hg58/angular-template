import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnChanges {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() chipTitle?: string;
  @Input() chipTitleColor = '#34a8eb';
  @Input() gutterTop = 0;
  @Input() padding = 16;
  @Input() relative = false;
  @Input() height = 'auto';
  @Input() overflow = 'visible';
  @Input() borderBottomLeftRadius = 8;
  @Input() expandable = false;
  @Input() showExpanded = true;

  @Output() readonly showExpandedChange = new EventEmitter<boolean>();

  expanded = this.showExpanded;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['showExpanded']) {
      this.expanded = this.showExpanded;
    }
  }

  get marginTop(): string {
    return `${this.gutterTop * 8}px`;
  }

  get showContent(): boolean {
    return !this.expandable || this.expanded;
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    this.showExpandedChange.emit(this.expanded);
  }
}
