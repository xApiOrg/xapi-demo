import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'xapi-account-selection',
  styleUrls: ['./account-selection.scss'],
  template: `
    <div class="xapi-account-selection">
      <div fxLayout='row' fxLayoutWrap>
        <div fxFlex="25" class="card-wrapper" fxFlex.sm="50" fxFlex.xs="50"
             *ngFor="let source of sources | slice:0:10, let i = index">
          <div (click)="selectCard(i, source)" class="card card-contact"
                [class.highlight]="hightlightStatusAccounts[i]">
            <div class="card-header">
              <i *ngIf="source.type === 'account'" class="material-icons md-48">card_travel</i>
              <i *ngIf="source.type === 'creditCard'" class="material-icons md-48">credit_card</i>
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
          </div>
        </div>
      </div>
    </div>
  `
})
export class AccountSelectionComponent {
  hightlightStatusAccounts: Array<boolean> = [];
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
    this.hightlightStatusAccounts = new Array(this.sources.length).fill(false);
    this.hightlightStatusAccounts[i] = true;

    setTimeout(() => {
      this.source.emit(source);
    }, 500);
  }
}
