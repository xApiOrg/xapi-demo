import { Component, OnDestroy, Input, trigger, state, style, transition, animate} from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'xapi-accordion-group',
  styleUrls: ['./accordion-group.scss'],
  template: `
    <div class="xapi-accordion-group" [ngClass]="{'closed': !isOpen}">
      <div class="panel-heading" (click)="toggleOpen()">
        <div class="panel-badge" [ngClass]="{'highlighted': isOpen}">{{index}}</div>
        <div class="panel-title" [ngClass]="{'highlighted': isOpen}">
          <span>{{heading}}</span>
          <span *ngIf="source" class="subtitle">{{source.name}}</span>
          <span *ngIf="source" class="link">Edit</span>
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

export class AccordionGroupComponent implements OnDestroy {
  @Input() heading: string;
  @Input() index: number;
  @Input() isOpen: boolean;
  @Input() source: any;

  constructor(private accordion: AccordionComponent) {
    this.accordion.addGroup(this);
  }

  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

  toggleOpen(): void {
    this.isOpen = this.isOpen === true ? false : true;
    this.accordion.step = this.index;

    if (this.isOpen === true) {
      this.accordion.closeOthers(this);
    }
  }
}
