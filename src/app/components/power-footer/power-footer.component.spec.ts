import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerFooterComponent } from './power-footer.component';

describe('PowerFooterComponent', () => {
  let component: PowerFooterComponent;
  let fixture: ComponentFixture<PowerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
