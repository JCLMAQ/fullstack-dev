import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentDetail } from './comment-detail';

describe('CommentDetail', () => {
  let component: CommentDetail;
  let fixture: ComponentFixture<CommentDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
