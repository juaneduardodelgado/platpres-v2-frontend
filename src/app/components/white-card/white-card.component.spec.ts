import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteCardComponent } from './white-card.component';

describe('WhiteCardComponent', () => {
  let component: WhiteCardComponent;
  let fixture: ComponentFixture<WhiteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
