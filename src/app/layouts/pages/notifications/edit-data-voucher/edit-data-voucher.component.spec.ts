import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataVoucherComponent } from './edit-data-voucher.component';

describe('EditDataVoucherComponent', () => {
  let component: EditDataVoucherComponent;
  let fixture: ComponentFixture<EditDataVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
