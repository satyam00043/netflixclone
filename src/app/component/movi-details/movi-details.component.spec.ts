import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviDetailsComponent } from './movi-details.component';

describe('MoviDetailsComponent', () => {
  let component: MoviDetailsComponent;
  let fixture: ComponentFixture<MoviDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviDetailsComponent]
    });
    fixture = TestBed.createComponent(MoviDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
