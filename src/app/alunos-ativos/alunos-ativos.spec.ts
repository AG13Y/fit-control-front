import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosAtivos } from './alunos-ativos';

describe('AlunosAtivos', () => {
  let component: AlunosAtivos;
  let fixture: ComponentFixture<AlunosAtivos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunosAtivos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunosAtivos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
