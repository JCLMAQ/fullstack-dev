import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneDetail } from './phone-detail';

describe('PhoneDetail', () => {
  let component: PhoneDetail;
  let fixture: ComponentFixture<PhoneDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
