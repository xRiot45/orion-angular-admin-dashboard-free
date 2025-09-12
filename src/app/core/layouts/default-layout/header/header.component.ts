import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ZardButtonComponent } from '@shared/components/ui/button/button.component';
import { ZardInputDirective } from '@shared/components/ui/input/input.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ZardButtonComponent, ZardInputDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidebar = new EventEmitter<void>();
  isMobileOrTablet = false;
  currentTime = '';

  private resizeListener!: () => void;
  private intervalId!: number;
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.updateTime();
    this.checkScreenSize();

    this.resizeListener = () => {
      this.checkScreenSize();
      this.cdr.markForCheck();
    };
    window.addEventListener('resize', this.resizeListener);

    this.intervalId = window.setInterval(() => {
      this.updateTime();
      this.cdr.markForCheck();
    }, 1000);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
    clearInterval(this.intervalId);
  }

  checkScreenSize() {
    this.isMobileOrTablet = window.innerWidth < 1024;
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
