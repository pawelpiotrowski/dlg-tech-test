import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Faq } from 'src/app/data/faq';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent {
  @Input() item: Faq | null = null;
  @Input() isExpanded = false;
  @Input() itemLabel = 'Q';
  @Output() toggleItem = new EventEmitter<Faq>();

  constructor(private element: ElementRef) {}

  onToggleItem(): void {
    if (this.item === null) {
      return;
    }
    this.element.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    this.toggleItem.emit(this.item as Faq);
  }
}
