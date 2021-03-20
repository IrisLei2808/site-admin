import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataStoreComponent } from './create-data-store.component';

describe('CreateDataStoreComponent', () => {
  let component: CreateDataStoreComponent;
  let fixture: ComponentFixture<CreateDataStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDataStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDataStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
