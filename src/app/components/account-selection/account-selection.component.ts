import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'xapi-account-selection',
  styleUrls: ['./account-selection.scss'],
  template: `
    <div class="xapi-account-selection">
      <div fxLayout='row' fxLayoutWrap>
        <div fxFlex="25" class="md-card-wrapper" fxFlex.sm="50" fxFlex.xs="50"
             *ngFor="let source of sources | slice:0:10, let i = index">
          <md-card (click)="selectCard(i, source)"
                   [class.highlight]="hightlightStatusAccounts[i]">
            <div class="card-header">
              <md-icon class="md-48" *ngIf="source.type === 'account'">card_travel</md-icon>
              <md-icon class="md-48" *ngIf="source.type === 'creditCard'">credit_card</md-icon>
              <div class="card-title">{{source.name}}</div>
            </div>

            <div class="card-footer">
              <div>
                <span *ngIf="source.type === 'creditCard'" class="currency-flag currency-flag-sm currency-flag-gbp"></span>
                <span *ngIf="source.type === 'account'">Account balance</span>
                <span *ngIf="source.type === 'creditCard'">{{source.currency}} card</span>
              </div>
              <div *ngIf="source.type === 'account'">{{source.balance | currency:source.currency:true:'1.2-2'}}</div>
              <div *ngIf="source.type === 'creditCard'">last digit {{source.lastDigit}}</div>
            </div>
          </md-card>
        </div>
      </div>
    </div>
  `
})
export class AccountSelectionComponent {
  hightlightStatusAccounts: Array<boolean> = [];

  @Output() next = new EventEmitter<void>();
  @Output() source = new EventEmitter<void>();

  sources = [
    {
      name: 'Current account',
      currency: 'GBP',
      accountNumber: '1468',
      balance: 102,
      type: 'account'
    },
    {
      name: 'Monthly saver',
      currency: 'GBP',
      accountNumber: '3345',
      balance: 3440,
      type: 'account'
    },
    {
      name: 'Annual saver',
      currency: 'GBP',
      accountNumber: '1232',
      balance: 12003,
      type: 'account'
    },
    {
      name: 'Credit Card',
      currency: 'GBP',
      lastDigit: '3312',
      type: 'creditCard'
    }
  ];

  selectCard(i: number, source: any): void {
    this.hightlightStatusAccounts = [];
    this.hightlightStatusAccounts[i] = true;

    // this.source.emit(source);

    setTimeout(() => {
      this.next.emit();
    }, 500);
  }
}
