import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Faq } from 'src/app/data/faq';

import { AccordionComponent } from './accordion.component';

const mockItem1: Faq = {
  id: '6',
  question: 'Test?',
  answer: 'Yes!',
};
const mockItem2: Faq = {
  id: '8',
  question: 'Foo',
  answer: 'Bar',
};

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleExpandItem', () => {
    describe('with multi flag set to true', () => {
      it('should toggle multi items expanded state', () => {
        const fixture = TestBed.createComponent(AccordionComponent);
        const component = fixture.componentInstance;
        component.multi = true;
        fixture.detectChanges();
        expect(component.isExpanded(mockItem1)).toEqual(false);
        component.toggleExpandItem(mockItem1);
        expect(component.isExpanded(mockItem1)).toEqual(true);
        component.toggleExpandItem(mockItem2);
        expect(component.isExpanded(mockItem1)).toEqual(true);
        expect(component.isExpanded(mockItem2)).toEqual(true);
      });
    });
    describe('with multi flag set to false (default)', () => {
      it('should toggle only single item expanded state', () => {
        const fixture = TestBed.createComponent(AccordionComponent);
        const component = fixture.componentInstance;
        expect(component.isExpanded(mockItem1)).toEqual(false);
        component.toggleExpandItem(mockItem1);
        expect(component.isExpanded(mockItem1)).toEqual(true);
        component.toggleExpandItem(mockItem2);
        expect(component.isExpanded(mockItem1)).toEqual(false);
        expect(component.isExpanded(mockItem2)).toEqual(true);
      });
    });
  });
});
