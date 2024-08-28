import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamDemoComponent } from './param-demo.component';

describe('ParamDemoComponent', () => {
  let component: ParamDemoComponent;
  let fixture: ComponentFixture<ParamDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParamDemoComponent]
    });
    fixture = TestBed.createComponent(ParamDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
