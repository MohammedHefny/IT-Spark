import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassStrengthComponent } from './pass-strength.component';

describe('PassStrengthComponent', () => {
  let component: PassStrengthComponent;
  let fixture: ComponentFixture<PassStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassStrengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
