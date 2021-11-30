import { Component, Input } from '@angular/core';
import { Faq } from 'src/app/data/faq';

type ExpansionListItem = Pick<Faq, 'id'>;

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() data: Faq[] = [];
  // Whether the accordion should allow multiple expanded accordion items simultaneously.
  @Input() multi = false;

  private expandedItems: ExpansionListItem[] = [];

  toggleExpandItem(item: Faq): void {
    if (this.isExpanded(item)) {
      this.collapseItem(item);
      return;
    }
    this.expandItem(item);
  }

  isExpanded(item: Faq): boolean {
    return (
      this.expandedItems.findIndex(
        (expandedItem: ExpansionListItem) => expandedItem.id === item.id
      ) > -1
    );
  }

  private expandItem(item: Faq): void {
    if (!this.multi) {
      this.expandedItems = [];
    }
    this.expandedItems.push({ id: item.id });
  }

  private collapseItem(item: Faq): void {
    if (!this.multi) {
      this.expandedItems = [];
      return;
    }
    this.expandedItems = this.expandedItems.filter(
      (expandedItem: ExpansionListItem) => expandedItem.id !== item.id
    );
  }
}
