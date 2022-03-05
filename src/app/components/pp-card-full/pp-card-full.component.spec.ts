import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpCardFullComponent } from './pp-card-full.component';

describe('PpCardFullComponent', () => {
  let component: PpCardFullComponent;
  let fixture: ComponentFixture<PpCardFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpCardFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpCardFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
