import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammateItemComponent } from './teammate-item.component';

describe('TeammateItemComponent', () => {
  let component: TeammateItemComponent;
  let fixture: ComponentFixture<TeammateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeammateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
