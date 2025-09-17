import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-401',
  imports: [],
  templateUrl: './error-401.component.html',
})
export class Error401Component {
  private router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }
}
