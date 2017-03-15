import { Component, OnDestroy, Input, trigger, state, style, transition, animate} from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'xapi-accordion-group',
  styleUrls: ['./accordion-group.scss'],
  template: `
    <div class="xapi-accordion-group" [ngClass]="{'panel-open': isOpen}">
      <div class="panel-heading" (click)="toggleOpen()">
        <div class="panel-badge">{{index}}</div>
        <h2 class="panel-title">{{heading}}</h2>
      </div>
      <div class="panel-collapse" [@panelState]="isOpen">
        <div class="panel-body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('panelState', [
      state('true', style({
        opacity: '1',
      })),
      state('false', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0'
      })),
      transition('0 => 1', animate('300ms ease-out')),
      transition('* => 0', animate('300ms ease-out')),
    ])
  ]
})

export class AccordionGroupComponent implements OnDestroy {
  @Input() heading: string;
  @Input() index: number;
  @Input() isOpen: boolean;

  constructor(private accordion: AccordionComponent) {
    this.accordion.addGroup(this);
  }

  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

  toggleOpen(): void {
    this.isOpen = this.isOpen === true ? false : true;

    if (this.isOpen === true) {
      this.accordion.closeOthers(this);
    }
  }
}
