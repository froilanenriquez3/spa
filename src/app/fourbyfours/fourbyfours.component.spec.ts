import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourbyfoursComponent } from './fourbyfours.component';

describe('FourbyfoursComponent', () => {
  let component: FourbyfoursComponent;
  let fixture: ComponentFixture<FourbyfoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourbyfoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourbyfoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
