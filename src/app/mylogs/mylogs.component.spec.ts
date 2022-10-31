import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylogsComponent } from './mylogs.component';

describe('MylogsComponent', () => {
  let component: MylogsComponent;
  let fixture: ComponentFixture<MylogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MylogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MylogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
