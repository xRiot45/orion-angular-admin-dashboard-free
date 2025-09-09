import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertDialogService {
  open = signal(false);

  show() {
    this.open.set(true);
  }

  hide() {
    this.open.set(false);
  }
}
