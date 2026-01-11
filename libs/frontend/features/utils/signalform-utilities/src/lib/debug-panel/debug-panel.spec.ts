import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugPanel } from './debug-panel';

describe('DebugPanel', () => {
  let component: DebugPanel;
  let fixture: ComponentFixture<DebugPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(DebugPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
