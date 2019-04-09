import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartstableComponent } from './chartstable.component';

describe('ChartstableComponent', () => {
  let component: ChartstableComponent;
  let fixture: ComponentFixture<ChartstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
