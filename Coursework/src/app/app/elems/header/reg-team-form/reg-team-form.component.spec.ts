import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTeamFormComponent } from './reg-team-form.component';

describe('RegTeamFormComponent', () => {
  let component: RegTeamFormComponent;
  let fixture: ComponentFixture<RegTeamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTeamFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
