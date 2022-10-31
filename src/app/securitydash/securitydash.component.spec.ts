import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritydashComponent } from './securitydash.component';

describe('SecuritydashComponent', () => {
  let component: SecuritydashComponent;
  let fixture: ComponentFixture<SecuritydashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritydashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
