import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-500',
  imports: [],
  template: `<p>error-500 works!</p>`,
  styleUrl: './error-500.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error500Component {}
