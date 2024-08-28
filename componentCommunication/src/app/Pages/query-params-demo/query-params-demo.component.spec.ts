import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamsDemoComponent } from './query-params-demo.component';

describe('QueryParamsDemoComponent', () => {
  let component: QueryParamsDemoComponent;
  let fixture: ComponentFixture<QueryParamsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryParamsDemoComponent]
    });
    fixture = TestBed.createComponent(QueryParamsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
