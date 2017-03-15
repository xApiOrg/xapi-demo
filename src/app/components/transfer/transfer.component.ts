import { Component } from '@angular/core';

@Component({
  selector: 'xapi-transfer',
  styleUrls: ['./transfer.scss'],
  template: `
    <div class="xapi-transfer">
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
  `
})
export class TransferComponent {

}
