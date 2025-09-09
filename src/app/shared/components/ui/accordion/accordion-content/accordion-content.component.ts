import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'ui-accordion-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-content.component.html',
})
export class AccordionContentComponent {
  public item = inject(AccordionItemComponent);
}
