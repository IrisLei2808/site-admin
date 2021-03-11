import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataUserComponent } from './edit-data-user.component';

describe('EditDataUserComponent', () => {
  let component: EditDataUserComponent;
  let fixture: ComponentFixture<EditDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
