import { Component } from '@angular/core';

@Component({
  selector: 'xapi-transfer',
  styleUrls: ['./transfer.scss'],
  template: `
    <div class="xapi-transfer">
      <div>
        <div class="xapi-payment-type-checkbox">
        <label>Payment type:</label>
        <input type="radio" value="fast" checked>Fast<br>
        <input type="radio" value="cheap">Cheap<br>
        </div>
        <div class="xapi-currency-input">
          <input mdInput placeholder="You send">
          <div class="currency-flag currency-flag-gbp"></div>
          <div class="currrency-name">GBP</div>
        </div>
        <div class="xapi-exchanges">
          <div class="exchange-fee">
            <span class="circle"></span>
            <span>4.98</span>
            <span class="text-light">Santander Fee</span>
          </div>
          <div class="exchange-rate">
            <span class="circle"></span>
            <span>0.867</span>
            <span class="text-light">Exchange Rate</span>
          </div>
        </div>
        <div class="xapi-currency-input">
          <input mdInput placeholder="Recipients gets">

          <div class="currency-flag currency-flag-usd"></div>
          <div class="currrency-name">USD</div>
        </div>
        <div>
          <span class="text-light">Estimated arrival:</span>
          <span>1 hour</span>
        </div>
      </div>
    </div>
  `
})
export class TransferComponent {

}
