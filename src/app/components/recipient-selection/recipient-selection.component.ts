import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'xapi-recipient-selection',
  styleUrls: ['./recipient-selection.scss'],
  template: `
    <div class="xapi-recipient-selection">

      <div class="subtitle-with-divider">Existing recipient</div>

      <div fxLayout='row' fxLayoutWrap>
        <div fxFlex="25" class="md-card-wrapper" fxFlex.sm="50" fxFlex.xs="50"
             *ngFor="let recipient of recipients | slice:0:3, let i = index">
          <md-card (click)="selectCard(i)"
                   [class.highlight]="hightlightStatusRecipients[i]">
            <div class="card-header">
              <md-icon class="md-48">account_circle</md-icon>
              <div class="card-title">{{recipient.name}}</div>
            </div>

            <div class="card-footer">
              <div>
                <span class="currency-flag currency-flag-sm currency-flag-gbp"></span>
                <span>{{recipient.currency}} account</span>
              </div>
              <div>ending with {{recipient.accountNumber}}</div>
            </div>
          </md-card>
        </div>
      </div>

      <div class="subtitle-with-divider new-recipient">New recipient</div>
      <md-card>
        <xapi-iban></xapi-iban>
      </md-card>
    </div>
  `
})
export class RecipientSelectionComponent {
  hightlightStatusRecipients: Array<boolean> = [];

  @Output() next = new EventEmitter<void>();

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

  selectCard(i: number): void {
    this.hightlightStatusRecipients = [];
    this.hightlightStatusRecipients[i] = true;
    this.next.emit();
  }
}
