import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCapitalComponent } from './country-capital.component';

describe('CountryCapitalComponent', () => {
  let component: CountryCapitalComponent;
  let fixture: ComponentFixture<CountryCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
