import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFourComponent } from './single-four.component';

describe('SingleFourComponent', () => {
  let component: SingleFourComponent;
  let fixture: ComponentFixture<SingleFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
