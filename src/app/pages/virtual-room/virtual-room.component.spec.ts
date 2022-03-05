import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualRoomComponent } from './virtual-room.component';

describe('VirtualRoomComponent', () => {
  let component: VirtualRoomComponent;
  let fixture: ComponentFixture<VirtualRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
