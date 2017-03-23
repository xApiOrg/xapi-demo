import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it(`should render title header'`, () => {
    const header = fixture.debugElement.query(By.css('.title'));
    expect(header.nativeElement.textContent).toEqual('Make an internationnal payment');
  });
});
