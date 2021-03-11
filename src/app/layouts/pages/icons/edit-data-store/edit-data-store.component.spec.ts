import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataStoreComponent } from './edit-data-store.component';

describe('EditDataStoreComponent', () => {
  let component: EditDataStoreComponent;
  let fixture: ComponentFixture<EditDataStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
