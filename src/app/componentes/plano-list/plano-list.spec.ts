import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoList } from './plano-list';

describe('PlanoList', () => {
  let component: PlanoList;
  let fixture: ComponentFixture<PlanoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
