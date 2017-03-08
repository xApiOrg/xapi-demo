import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <header>
      <md-toolbar color="primary">
        <img src="/assets/images/santander.png" alt="Santander logo" class="logo">
        <span class="title">Experience API Demo</span>
      </md-toolbar>
    </header>

    <main>
      <div class="account-selection">
        <h2>1 - Select an account</h2>
        <md-grid-list cols="5" rowHeight="140px" gutterSize="20px">
          <md-grid-tile>
            <md-card>
              <md-icon class="md-48">card_travel</md-icon>
              <div class="card-text">Current Account</div>
            </md-card>
          </md-grid-tile>
          <md-grid-tile>
            <md-card>
              <md-icon class="md-48">card_travel</md-icon>
              <div class="card-text">Annual Saver</div>
            </md-card>
          </md-grid-tile>
          <md-grid-tile>
            <md-card>
              <md-icon class="md-48">card_travel</md-icon>
              <div class="card-text">Monthly Saver</div>
            </md-card>
          </md-grid-tile>
        </md-grid-list>
      </div>

      <div class="recipient-selection">
        <h2>2 - Select a recipient</h2>

        <div class="subtitle-with-divider">Existing recipient</div>
        <md-grid-list cols="5" rowHeight="140px" gutterSize="20px">
          <md-grid-tile>
            <md-card>
              <md-icon class="md-48">account_circle</md-icon>
              <div class="card-text">Roderick Shelton</div>
            </md-card>
          </md-grid-tile>
          <md-grid-tile>
            <md-card>
              <md-icon class="md-48">account_circle</md-icon>
              <div class="card-text">Walter Harford</div>
            </md-card>
          </md-grid-tile>
          <md-grid-tile>
            <md-card>
              <md-icon class="md-48">account_circle</md-icon>
              <div class="card-text">Delmar Moores</div>
            </md-card>
          </md-grid-tile>
        </md-grid-list>

        <div class="subtitle-with-divider new-recipient">New recipient</div>
        <md-card>
          <xapi-iban></xapi-iban>
        </md-card>
      </div>

      <div class="transfer">
        <h2>3 - Your transfer</h2>
        <md-card>
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
        </md-card>
      </div>
    </main>

    <footer>
    </footer>
  `
})
export class AppComponent {
}
