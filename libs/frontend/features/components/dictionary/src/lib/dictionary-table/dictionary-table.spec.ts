import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DictionaryTable } from './dictionary-table';

describe('DictionaryTable', () => {
  let component: DictionaryTable;
  let fixture: ComponentFixture<DictionaryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictionaryTable],
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
