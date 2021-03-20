import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataUserComponent } from './create-data-user.component';

describe('CreateDataUserComponent', () => {
  let component: CreateDataUserComponent;
  let fixture: ComponentFixture<CreateDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDataUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
