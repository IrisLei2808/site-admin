import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataPromotionComponent } from './edit-data-promotion.component';

describe('EditDataPromotionComponent', () => {
  let component: EditDataPromotionComponent;
  let fixture: ComponentFixture<EditDataPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
