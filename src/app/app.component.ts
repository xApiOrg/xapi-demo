import { Component } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './components/modal/modal.service';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'xapi-demo',
  styleUrls: ['./app.component.scss'],
  template: `
    <header fxLayout="row" fxLayoutAlign="center center">
      <img fxHide.xs fxHide.sm src="./assets/images/santander.png" alt="Santander logo" class="logo">
      <span class="title">Make a payment</span>
    </header>

    <main>
      <xapi-accordion>
        <xapi-accordion-group heading="Select an account" [index]=0 [isOpen]=true [source]="source">
          <xapi-account-selection (source)="displaySource($event)"></xapi-account-selection>
        </xapi-accordion-group>

        <xapi-accordion-group heading="Select a recipient" [index]=1 [isOpen]=false [recipient]="recipient">
          <xapi-recipient-selection (recipient)="displayRecipient($event)"></xapi-recipient-selection>
        </xapi-accordion-group>

        <xapi-accordion-group heading="Your transfer" [index]=2 [isOpen]=false>
          <xapi-transfer (openModal)="openTransferReviewModal($event)"></xapi-transfer>
        </xapi-accordion-group>
      </xapi-accordion>
    </main>

    <ng2-toasty></ng2-toasty>

    <xapi-modal [modalTitle]="'Review your transfer'" [blocking]=false [modalId]="modalId">
      <div fxLayout="row" fxLayoutAlign="center stretch" class="transfer">
        <div class="source" fxLayout="column" fxLayoutAlign="space-around center">
          <div class="card-header">
            <i *ngIf="source && source.type === 'account'" class="material-icons md-48">card_travel</i>
            <i *ngIf="source && source.type === 'creditCard'" class="material-icons md-48">credit_card</i>
            <div class="card-title" *ngIf="source" >{{source.name}}</div>
          </div>

          <div class="card-footer">
            <div>
              <span *ngIf="source && source.type === 'creditCard'" class="currency-flag currency-flag-sm currency-flag-gbp"></span>
              <span *ngIf="source && source.type === 'account'">Account balance</span>
              <span *ngIf="source && source.type === 'creditCard'">{{source.currency}} card</span>
            </div>
            <div *ngIf="source && source.type === 'account'">{{source.balance | currency:source.currency:true:'1.2-2'}}</div>
            <div *ngIf="source && source.type === 'creditCard'">last digit {{source.lastDigit}}</div>
          </div>
        </div>

        <div class="arrow" fxLayout="column" fxLayoutAlign="strech">
          <i class="material-icons md-48">trending_flat</i>
        </div>

        <div class="recipient" fxLayout="column" fxLayoutAlign="space-around center">
          <div class="card-header">
            <i class="md-48 material-icons">account_circle</i>
            <div *ngIf="recipient" class="card-title">{{recipient.name}}</div>
          </div>

          <div class="card-footer">
            <div>
              <span class="currency-flag currency-flag-sm currency-flag-gbp"></span>
              <span *ngIf="recipient">{{recipient.currency}} account</span>
            </div>
            <div *ngIf="recipient">ending with {{recipient.accountNumber}}</div>
          </div>
        </div>
      </div>
      <div class="buttons" fxLayout="row" fxLayoutAlign="center">
        <button class="xapi-submit" type="submit" (click)="confirmTransfer()">Confirm your transfer</button>
      </div>
    </xapi-modal>

    <footer>
    </footer>
  `
})
export class AppComponent {
  source: any;
  recipient: any;
  modalId = 'modalTransferReview';

  toastOptions: ToastOptions = {
    title: 'Transfer successful',
    showClose: true,
    timeout: 2000,
    theme: 'default'
  };

  constructor(
    private modalService: ModalService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {}

  displaySource(source: any) {
    this.source = source;
  }

  displayRecipient(recipient: any) {
    this.recipient = recipient;
  }

  closeModal() {
    this.modalService.close(this.modalId);
  }

  openTransferReviewModal(modalId: string) {
    this.modalId = modalId;
    this.modalService.open(modalId);
  }

  confirmTransfer() {
    this.modalService.close(this.modalId);

    setTimeout(() => {
      this.toastyService.success(this.toastOptions);
    }, 500);
  }
}
