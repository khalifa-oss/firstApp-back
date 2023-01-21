import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTraineeShipComponent } from './create-trainee-ship.component';

describe('CreateTraineeShipComponent', () => {
  let component: CreateTraineeShipComponent;
  let fixture: ComponentFixture<CreateTraineeShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTraineeShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTraineeShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
