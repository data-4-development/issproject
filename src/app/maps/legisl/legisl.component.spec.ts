import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislComponent } from './legisl.component';

describe('LegislComponent', () => {
  let component: LegislComponent;
  let fixture: ComponentFixture<LegislComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
