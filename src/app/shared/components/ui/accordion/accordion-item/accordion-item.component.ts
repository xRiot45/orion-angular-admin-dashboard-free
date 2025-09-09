import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-accordion-item',
  standalone: true,
  templateUrl: './accordion-item.component.html',
})
export class AccordionItemComponent {
  @Input() value!: string;
  open = false;

  toggle() {
    this.open = !this.open;
  }
}
