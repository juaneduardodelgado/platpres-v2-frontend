import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplSelectorComponent } from './tmpl-selector.component';

describe('TmplSelectorComponent', () => {
  let component: TmplSelectorComponent;
  let fixture: ComponentFixture<TmplSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmplSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmplSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
