import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationArrayComponent } from './pagination-array.component';

describe('PaginationArrayComponent', () => {
  let component: PaginationArrayComponent;
  let fixture: ComponentFixture<PaginationArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
