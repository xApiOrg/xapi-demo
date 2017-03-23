import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'xapi-recipient-selection',
  styleUrls: ['./recipient-selection.scss'],
  template: `
    <div class="xapi-recipient-selection">

      <div class="subtitle">Existing recipient</div>

      <div fxLayout='row' fxLayoutWrap class="existing-recipient">
        <div fxFlex="25" class="card-wrapper" fxFlex.sm="50" fxFlex.xs="50"
             *ngFor="let recipient of recipients | slice:0:3, let i = index">
          <div (click)="selectCard(i, recipient)" class="card card-contact"
               [class.highlight]="hightlightStatusRecipients[i]">
            <div class="card-header">
              <i class="md-48 material-icons">account_circle</i>
              <div class="card-title">{{recipient.name}}</div>
            </div>

            <div class="card-footer">
              <div>
                <span class="currency-flag currency-flag-sm currency-flag-gbp"></span>
                <span>{{recipient.currency}} account</span>
              </div>
              <div>ending with {{recipient.accountNumber}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="new-recipient">
        <div class="subtitle">New recipient</div>
        <div class="card">
          <xapi-iban></xapi-iban>
        </div>
      </div>
    </div>
  `
})
export class RecipientSelectionComponent {
  hightlightStatusRecipients: Array<boolean> = [];

  @Output() next = new EventEmitter<void>();
  @Output() recipient = new EventEmitter<void>();

  recipients = [
    {
      name: 'Roderick Shelton',
      currency: 'GBP',
      accountNumber: '1468'
    },
    {
      name: 'Walter Harford',
      currency: 'GBP',
      accountNumber: '3345'
    },
    {
      name: 'Delmar Moores',
      currency: 'GBP',
      accountNumber: '1232'
    }
  ];

  selectCard(i: number, recipient: any): void {
    this.hightlightStatusRecipients = [];
    this.hightlightStatusRecipients[i] = true;

    setTimeout(() => {
      this.recipient.emit(recipient);
    }, 500);
  }
}
