import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritynavbarComponent } from './securitynavbar.component';

describe('SecuritynavbarComponent', () => {
  let component: SecuritynavbarComponent;
  let fixture: ComponentFixture<SecuritynavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritynavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritynavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
