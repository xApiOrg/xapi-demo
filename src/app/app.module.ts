import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';

import { XapiIbanModule } from 'xapi-iban';
import { AppComponent } from './app.component';

import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionGroupComponent } from './components/accordion/accordion-group/accordion-group.component';

import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './components/modal/modal.service';

import { AccountSelectionComponent } from './components/account-selection/account-selection.component';
import { RecipientSelectionComponent } from './components/recipient-selection/recipient-selection.component';
import { TransferComponent } from './components/transfer/transfer.component';

import { FormatHoursPipe } from './components/shared/format-hours.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    ModalComponent,
    AccordionGroupComponent,
    AccountSelectionComponent,
    RecipientSelectionComponent,
    TransferComponent,
    FormatHoursPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    XapiIbanModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ToastyModule.forRoot()
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
