import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pages-error-500',
  imports: [],
  templateUrl: './error-500.component.html',
})
export class Error500Component {
  private router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }
}
