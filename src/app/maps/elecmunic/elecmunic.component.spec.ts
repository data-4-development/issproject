import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecmunicComponent } from './elecmunic.component';

describe('ElecmunicComponent', () => {
  let component: ElecmunicComponent;
  let fixture: ComponentFixture<ElecmunicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecmunicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecmunicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
