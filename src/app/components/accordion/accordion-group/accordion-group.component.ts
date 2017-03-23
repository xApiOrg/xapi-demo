import { Component, OnDestroy, Input, trigger, state, style, transition, animate, OnChanges, SimpleChange } from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'xapi-accordion-group',
  styleUrls: ['./accordion-group.scss'],
  template: `
    <div class="xapi-accordion-group" [ngClass]="{'closed': !isOpen}">
      <div class="panel-heading" (click)="toggleOpen()">
        <div class="panel-badge" [ngClass]="{'highlighted': isOpen}">{{index + 1}}</div>
        <div class="panel-title" [ngClass]="{'highlighted': isOpen}">
          <span>{{heading}}</span>
          <span *ngIf="source && index == 0" class="subtitle">{{source.name}}</span>
          <span *ngIf="recipient && index == 1" class="subtitle">{{recipient.name}}</span>
          <span *ngIf="source && !isOpen || recipient && !isOpen" class="link">Edit</span>
        </div>
      </div>
      <div class="panel-collapse">
        <div class="panel-body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})

export class AccordionGroupComponent implements OnDestroy, OnChanges {
  @Input() heading: string;
  @Input() index: number;
  @Input() isOpen: boolean;
  @Input() source: any;
  @Input() recipient: any;

  constructor(private accordion: AccordionComponent) {
    this.accordion.addGroup(this);
  }

  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];

        if (!changedProp.isFirstChange()) {
          this.accordion.groups[this.index + 1].toggleOpen();
        }
      }
    }
  }

  toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.accordion.closeOthers(this);
    }
  }
}
