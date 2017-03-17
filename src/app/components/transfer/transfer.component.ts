import { Component } from '@angular/core';

@Component({
  selector: 'xapi-transfer',
  styleUrls: ['./transfer.scss'],
  template: `
    <div class="xapi-transfer">
      <div class="card">
        <div class="xapi-payment-checkbox">
          <label>Payment type:</label>
          <form>
            <input type="radio" name="paymentType" value="fast" checked>
            <span>Fast</span>
            <input type="radio" name="paymentType" value="cheap">
            <span>Cheap</span>
          </form>
        </div>

        <div class="currency-input-wrapper" fxLayout="row" fxLayoutAlign=" center">
          <input class="xapi-input" placeholder="1000">
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

        <div class="currency-input-wrapper" fxLayout="row" fxLayoutAlign=" center">
          <input class="xapi-input" mdInput placeholder="1235.80">
          <div class="currency-flag currency-flag-usd"></div>
          <div class="currrency-name">USD</div>
        </div>

        <div class="estimated-arrive-wrapper">
          <span class="text-light">Estimated arrival:</span>
          <span>1 hour</span>
        </div>
      </div>
    </div>
  `
})
export class TransferComponent {

}
