import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-elements-button-showcase',
  imports: [],
  template: `<p>button-showcase works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonShowcaseComponent {}
