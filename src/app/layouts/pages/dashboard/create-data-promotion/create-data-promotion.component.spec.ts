import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataPromotionComponent } from './create-data-promotion.component';

describe('CreateDataPromotionComponent', () => {
  let component: CreateDataPromotionComponent;
  let fixture: ComponentFixture<CreateDataPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDataPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDataPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
