import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <md-toolbar color="primary">
      <img src="/assets/images/santander.png" alt="Santander logo" class="logo">
      <span class="title">Experience API Demo</span>
    </md-toolbar>

    <md-card>
      <md-card-title>Xapi Iban</md-card-title>
      <xapi-iban></xapi-iban>
    </md-card>
  `
})
export class AppComponent {
}
