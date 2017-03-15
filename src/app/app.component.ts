import { Component } from '@angular/core';

@Component({
  selector: 'xapi-demo',
  styleUrls: ['./app.component.scss'],
  template: `
    <header>
      <md-toolbar color="primary">
        <img fxHide.xs fxHide.sm src="/assets/images/santander.png" alt="Santander logo" class="logo">
        <span class="title">Make an internationnal payment</span>
      </md-toolbar>
    </header>

    <main>
      <xapi-accordion [step]="step">
        <xapi-accordion-group heading="Select an account" index=1 isOpen=true>
          <xapi-account-selection (next)="nextStep(1)"></xapi-account-selection>
        </xapi-accordion-group>

        <xapi-accordion-group heading="Select a recipient" index=2 isOpen=false>
          <xapi-recipient-selection (next)="nextStep(2)"></xapi-recipient-selection>
        </xapi-accordion-group>

        <xapi-accordion-group heading="Your transfer" index=3 isOpen=false>
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

  // displaySource(source: any) {
  //   this.source = source
  // }
}
