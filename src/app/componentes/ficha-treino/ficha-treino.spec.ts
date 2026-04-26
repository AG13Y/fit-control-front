import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTreino } from './ficha-treino';

describe('FichaTreino', () => {
  let component: FichaTreino;
  let fixture: ComponentFixture<FichaTreino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaTreino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaTreino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
