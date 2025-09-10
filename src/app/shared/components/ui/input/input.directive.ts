import { computed, Directive, ElementRef, inject, input } from '@angular/core';
import { inputVariants, ZardInputVariants } from '@shared/components/ui/input/input.variants';
import { mergeClasses, transform } from '@shared/utils/merge-classes';
import { ClassValue } from 'clsx';

@Directive({
  selector: 'input[z-input], textarea[z-input]',
  exportAs: 'zInput',
  standalone: true,
  host: {
    '[class]': 'classes()',
  },
})
export class ZardInputDirective {
  private readonly isTextarea =
    inject(ElementRef).nativeElement.tagName.toLowerCase() === 'textarea';

  readonly zBorderless = input(false, { transform });
  readonly zSize = input<ZardInputVariants['zSize']>('default');
  readonly zStatus = input<ZardInputVariants['zStatus']>();

  readonly class = input<ClassValue>('');

  protected readonly classes = computed(() =>
    mergeClasses(
      inputVariants({
        zType: !this.isTextarea ? 'default' : 'textarea',
        zSize: this.zSize(),
        zStatus: this.zStatus(),
        zBorderless: this.zBorderless(),
      }),
      this.class(),
    ),
  );
}
