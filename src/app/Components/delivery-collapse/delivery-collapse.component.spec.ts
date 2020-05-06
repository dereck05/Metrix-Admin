import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCollapseComponent } from './delivery-collapse.component';

describe('DeliveryCollapseComponent', () => {
  let component: DeliveryCollapseComponent;
  let fixture: ComponentFixture<DeliveryCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
