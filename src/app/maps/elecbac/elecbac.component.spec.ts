import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecbacComponent } from './elecbac.component';

describe('ElecbacComponent', () => {
  let component: ElecbacComponent;
  let fixture: ComponentFixture<ElecbacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecbacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecbacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
