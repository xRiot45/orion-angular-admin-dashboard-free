import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-404',
  imports: [],
  templateUrl: './error-404.component.html',
})
export class Error404Component {
  private router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }
}
