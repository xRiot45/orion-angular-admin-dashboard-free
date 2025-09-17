import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-401',
  imports: [],
  template: `<p>error-401 works!</p>`,
  styleUrl: './error-401.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error401Component { }
