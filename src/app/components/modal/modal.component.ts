import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import { ModalService } from './modal.service';

@Component({
    selector: 'xapi-modal',
    host: { '(document:keyup)': 'keyup($event)' },
    styleUrls: ['./modal.scss'],
    template: `
      <div [ngClass]="{'closed': !isOpen}">
        <div class="modal-overlay" (click)="close(true)"></div>

        <div class="modal">
          <div class="title" *ngIf="modalTitle">
            <span class="title-text">{{ modalTitle }}</span>
            <span class="right-align" (click)="close(true)"><i class="material-icons md-24">clear</i></span>
          </div>

          <div class="body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    `
})
export class ModalComponent implements OnInit {
  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() blocking = false;
  isOpen = false;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  close(checkBlocking = false): void {
    this.modalService.close(this.modalId, checkBlocking);
  }

  private keyup(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.modalService.close(this.modalId, true);
    }
  }
}
