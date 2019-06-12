import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbeServiceLibComponent } from './sbe-service-lib.component';

describe('SbeServiceLibComponent', () => {
  let component: SbeServiceLibComponent;
  let fixture: ComponentFixture<SbeServiceLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbeServiceLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbeServiceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
