import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PictureMgt } from './picture-mgt';

describe('PictureMgt', () => {
  let component: PictureMgt;
  let fixture: ComponentFixture<PictureMgt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureMgt],
    }).compileComponents();

    fixture = TestBed.createComponent(PictureMgt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
