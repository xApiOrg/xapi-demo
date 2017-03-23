import { Component } from '@angular/core';

@Component({
  selector: 'xapi-demo',
  styleUrls: ['./app.component.scss'],
  template: `
    <header fxLayout="row" fxLayoutAlign="center center">
      <img fxHide.xs fxHide.sm src="./assets/images/santander.png" alt="Santander logo" class="logo">
      <span class="title">Make an internationnal payment</span>
    </header>

    <main>
      <xapi-accordion>
        <xapi-accordion-group heading="Select an account" [index]=0 [isOpen]=true [source]="source">
          <xapi-account-selection (source)="displaySource($event)"></xapi-account-selection>
        </xapi-accordion-group>

        <xapi-accordion-group heading="Select a recipient" [index]=1 [isOpen]=false [recipient]="recipient">
          <xapi-recipient-selection (recipient)="displayRecipient($event)"></xapi-recipient-selection>
        </xapi-accordion-group>

        <xapi-accordion-group heading="Your transfer" [index]=2 [isOpen]=false>
          <xapi-transfer></xapi-transfer>
        </xapi-accordion-group>
      </xapi-accordion>
    </main>

    <footer>
    </footer>
  `
})
export class AppComponent {
  source: any;
  recipient: any;

  displaySource(source: any) {
    this.source = source;
  }

  displayRecipient(recipient: any) {
    this.recipient = recipient;
  }
}
