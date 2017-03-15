import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

@Component({
  selector: 'xapi-accordion',
  styleUrls: ['./accordion.scss'],
  template: `
    <div class="xapi-accordion">
      <ng-content></ng-content>
    </div>
  `
})
export class AccordionComponent implements OnChanges {
  @Input() step: number;
  groups: Array<AccordionGroupComponent> = [];

  addGroup(group: AccordionGroupComponent): void {
    this.groups.push(group);
  }

  closeOthers(openGroup: AccordionGroupComponent): void {
    this.groups.forEach((group: AccordionGroupComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  removeGroup(group: AccordionGroupComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('call');
    if (changes['step']) {
      console.log(changes);
      const changedProp = changes['step'];
      const newStep = changedProp.currentValue;
      if (!changedProp.isFirstChange()) {
        this.openStep(newStep);
      }
    }
  }

  openStep(step: number): void {
    this.groups[step - 1].toggleOpen();
  }
}
