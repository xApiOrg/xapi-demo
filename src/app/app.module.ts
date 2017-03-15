import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { XapiIbanModule } from 'xapi-iban';
import { AppComponent } from './app.component';

import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionGroupComponent } from './components/accordion/accordion-group/accordion-group.component';

import { AccountSelectionComponent } from './components/account-selection/account-selection.component';
import { RecipientSelectionComponent } from './components/recipient-selection/recipient-selection.component';
import { TransferComponent } from './components/transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionGroupComponent,
    AccountSelectionComponent,
    RecipientSelectionComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    XapiIbanModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
