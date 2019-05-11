import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecComponent } from './elec.component';

describe('ElecComponent', () => {
  let component: ElecComponent;
  let fixture: ComponentFixture<ElecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
