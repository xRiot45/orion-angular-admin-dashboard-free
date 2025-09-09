import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-alert',
  standalone: true,
  imports: [NgClass],
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  @Input() variant: 'default' | 'destructive' = 'default';

  get variantClass(): string {
    switch (this.variant) {
      case 'destructive':
        return 'bg-red-50 text-red-700 border-red-300';
      default:
        return 'bg-white text-gray-900 border-gray-200';
    }
  }
}
