import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <header>
      <md-toolbar color="primary">
        <img fxHide.xs fxHide.sm src="/assets/images/santander.png" alt="Santander logo" class="logo">
        <span class="title">Make an internationnal payment</span>
      </md-toolbar>
    </header>

    <main>
      <div class="account-selection">
        <h2>1 - Select an account</h2>

        <div fxLayout='row' fxLayoutWrap>
          <div fxFlex="25" class="md-card-wrapper" fxFlex.sm="50" fxFlex.xs="50"
               *ngFor="let source of sources | slice:0:10, let i = index">
            <md-card (click)="hightlightStatusAccounts = []; hightlightStatusAccounts[i]=true"
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

      <div class="recipient-selection">
        <h2>2 - Select a recipient</h2>

        <div class="subtitle-with-divider">Existing recipient</div>

        <div fxLayout='row' fxLayoutWrap>
          <div fxFlex="25" class="md-card-wrapper" fxFlex.sm="50" fxFlex.xs="50"
               *ngFor="let recipient of recipients | slice:0:3, let i = index">
            <md-card (click)="hightlightStatusRecipients = []; hightlightStatusRecipients[i]=true"
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

      <div class="transfer">
        <h2>3 - Your transfer</h2>
        <md-card>
          <div class="xapi-payment-type-checkbox">
          <label class="example-margin">Payment type:</label>
            <md-radio-group color="primary">
              <md-radio-button value="fast">Fast</md-radio-button>
              <md-radio-button value="cheap">Cheap</md-radio-button>
            </md-radio-group>
          </div>
          <div class="xapi-currency-input">
            <md-input-container>
              <input mdInput placeholder="You send">
            </md-input-container>
            <div class="currency-flag currency-flag-gbp"></div>
            <div class="currrency-name">GBP</div>
          </div>
          <div>4.98 <span class="text-light">Santander Fee</span></div>
          <div>0.867 <span class="text-light">Exchange Rate</span></div>
          <div class="xapi-currency-input">
            <md-input-container>
              <input mdInput placeholder="Recipients gets">
            </md-input-container>

            <div class="currency-flag currency-flag-usd"></div>
            <div class="currrency-name">USD</div>
          </div>
          <div><span class="text-light">Estimated arrival:</span> 1 hour</div>
        </md-card>
      </div>
    </main>

    <footer>
    </footer>
  `
})
export class AppComponent {
  hightlightStatusRecipients: Array<boolean> = [];
  hightlightStatusAccounts: Array<boolean> = [];

  groups: Array<any> = [
    {
      heading: 'Angular2Accordion Dynamic Content A',
      content: ' I’m a dynamic content to show in angular 2 accordion : )'
    },
    {
      heading: 'Angular2Accordion Dynamic Content B',
      content: 'I’m a dynamic content to show in angular 2 accordion : )'
    },
    {
      heading: 'Angular2Accordion HTML Content C',
      content: 'I’m a dynamic content to show in angular 2 accordion : ) '
    }
  ];

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

}
