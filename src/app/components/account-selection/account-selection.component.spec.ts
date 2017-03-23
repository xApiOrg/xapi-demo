/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountSelectionComponent } from './account-selection.component';
import { DebugElement } from '@angular/core';
import { async, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('AccountSelectionComponent', () => {
  let fixture: ComponentFixture<AccountSelectionComponent>;
  let comp: AccountSelectionComponent;
  let sourceCards: DebugElement[];

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [
        AccountSelectionComponent
      ]
    });

    fixture = TestBed.createComponent(AccountSelectionComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges();
    sourceCards = fixture.debugElement.queryAll(By.css('.card'));
  });

  it('raises an event & selects the card when a sources is clicked', fakeAsync(() => {
    let selectedSource: any;
    const expectedSource = {
      name: 'Monthly saver',
      currency: 'GBP',
      accountNumber: '3345',
      balance: 3440,
      type: 'account'
    };

    comp.source.subscribe(source => selectedSource = source);

    expect(comp.hightlightStatusAccounts).toEqual([]);

    sourceCards[1].triggerEventHandler('click', null);
    tick(500);
    expect(selectedSource).toEqual(expectedSource);
    expect(comp.hightlightStatusAccounts).toEqual([false, true, false, false]);
  }));
});
