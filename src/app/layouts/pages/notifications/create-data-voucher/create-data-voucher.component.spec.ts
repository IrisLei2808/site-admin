import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataVoucherComponent } from './create-data-voucher.component';

describe('CreateDataVoucherComponent', () => {
  let component: CreateDataVoucherComponent;
  let fixture: ComponentFixture<CreateDataVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDataVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDataVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
