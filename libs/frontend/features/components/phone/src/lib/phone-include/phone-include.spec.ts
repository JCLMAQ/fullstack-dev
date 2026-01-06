import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneInclude } from './phone-include';

describe('PhoneInclude', () => {
  let component: PhoneInclude;
  let fixture: ComponentFixture<PhoneInclude>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneInclude],
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneInclude);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
