import { NgModule } from '@angular/core';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionTriggerComponent } from './accordion-trigger/accordion-trigger.component';
import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [
    AccordionComponent,
    AccordionTriggerComponent,
    AccordionContentComponent,
    AccordionItemComponent,
  ],
  exports: [
    AccordionComponent,
    AccordionTriggerComponent,
    AccordionContentComponent,
    AccordionItemComponent,
  ],
})
export class AccordionModule {}
