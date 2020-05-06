import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptionAddComponent } from './suscription-add.component';

describe('SuscriptionAddComponent', () => {
  let component: SuscriptionAddComponent;
  let fixture: ComponentFixture<SuscriptionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscriptionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
