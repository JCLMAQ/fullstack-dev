import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressUi } from './address-ui';

describe('AddressUi', () => {
  let component: AddressUi;
  let fixture: ComponentFixture<AddressUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressUi],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
