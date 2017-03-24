import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormatHoursPipe } from '../shared/format-hours.pipe';

@Component({
  selector: 'xapi-transfer',
  styleUrls: ['./transfer.scss'],
  template: `
    <div class="xapi-transfer">
      <div class="card">
        <div class="xapi-payment-checkbox" fxLayout="row">
          <label>Payment type:</label>
          <span *ngFor="let payment of payments; let i = index" class="xapi-radio" >
            <label>
              <input type="radio" name="paymentType" [checked]="i === 0"
                   (change)="onSelectionChange(payment)">
              <span class="text">{{payment.type}}</span>
              <span class="check"></span>
            </label>
          </span>
        </div>

        <div class="currency-input-wrapper" fxLayout="row" fxLayoutAlign=" center">
          <input class="xapi-input" placeholder="1000.00" type="number"
                  [(ngModel)]="currencyInput" (keyup)="this.updateOutput()" (blur)="this.roundInput(currencyInput)">
          <div class="currency-flag currency-flag-gbp"></div>
          <div class="currrency-name">GBP</div>
        </div>

        <div class="xapi-exchanges">
          <div class="exchange-fee">
            <span class="circle"></span>
            <span>{{payment.fee}}</span>
            <span class="text-light">Santander Fee</span>
          </div>
          <div class="exchange-rate">
            <span class="circle"></span>
            <span>0.867</span>
            <span class="text-light">Exchange Rate</span>
          </div>
        </div>

        <div class="currency-input-wrapper" fxLayout="row" fxLayoutAlign=" center">
          <input class="xapi-input" placeholder="1235.80" type="number"
                 [(ngModel)]="currencyOutput" (keyup)="this.updateInput()" (blur)="this.roundOutput(currencyOutput)">
          <div class="currency-flag currency-flag-usd"></div>
          <div class="currrency-name">USD</div>
        </div>

        <div class="estimated-arrive-wrapper">
          <span class="text-light">Estimated arrival:</span>
          <span>{{payment.estimatedArrival | formatHours }}</span>
        </div>

        <button class="xapi-submit" type="submit" (click)="openModal.emit('modalTransferReview')">Review your transfer</button>
      </div>
    </div>
  `
})
export class TransferComponent {
  payments = [
    {
      type: 'fast',
      fee: '4.98',
      estimatedArrival: 5
    },
    {
      type: 'cheap',
      fee: '4.05',
      estimatedArrival: 121
    }
  ];

  payment = this.payments[0];
  currencyInput= '';
  currencyOutput= '';
  @Output() openModal = new EventEmitter<void>();

  onSelectionChange(payment) {
    this.payment = payment;
  }

  updateOutput(value: string) {
    this.currencyOutput = (+this.currencyInput * 1.25).toFixed(2);
  }

  updateInput(value: string) {
    this.currencyInput = (+this.currencyOutput * 0.8).toFixed(2);
  }

  roundInput(value: string) {
    this.currencyInput = (+value).toFixed(2);
  }

  roundOutput(value: string) {
    this.currencyOutput = (+value).toFixed(2);
  }
}
