import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-404',
  imports: [],
  template: `<p>error-404 works!</p>`,
  styleUrl: './error-404.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404Component {}
