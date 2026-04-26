import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chekin } from './chekin';

describe('Chekin', () => {
  let component: Chekin;
  let fixture: ComponentFixture<Chekin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chekin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chekin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
