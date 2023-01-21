import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTraineehipComponent } from './manage-traineehip.component';

describe('ManageTraineehipComponent', () => {
  let component: ManageTraineehipComponent;
  let fixture: ComponentFixture<ManageTraineehipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTraineehipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTraineehipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
