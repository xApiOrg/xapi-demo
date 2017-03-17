import { Component } from '@angular/core';

@Component({
  selector: 'xapi-demo',
  styleUrls: ['./app.component.scss'],
  template: `
    <header fxLayout="row" fxLayoutAlign="center center">
      <img fxHide.xs fxHide.sm src="/assets/images/santander.png" alt="Santander logo" class="logo">
      <span class="title">Make an internationnal payment</span>
    </header>

    <main>
      <xapi-accordion [step]="step">
        <xapi-accordion-group heading="Select an account" [index]=1 [isOpen]=false [source]="source">
          <xapi-account-selection (next)="nextStep(1)" (source)="displaySource($event)"></xapi-account-selection>
        </xapi-accordion-group>

        <xapi-accordion-group heading="Select a recipient" [index]=2 [isOpen]=true>
          <xapi-recipient-selection (next)="nextStep(2)"></xapi-recipient-selection>
        </xapi-accordion-group>

        <xapi-accordion-group heading="Your transfer" [index]=3 [isOpen]=false>
          <xapi-transfer></xapi-transfer>
        </xapi-accordion-group>
      </xapi-accordion>
    </main>

    <footer>
    </footer>
  `
})
export class AppComponent {
  step = 1;
  source: any;

  nextStep(index: number) {
    this.step = index + 1;
  }

  displaySource(source: any) {
    this.source = source;
  }
}
