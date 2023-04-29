import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderHeureSuppAeFFComponent } from './valider-heure-supp-ae-ff.component';

describe('ValiderHeureSuppAeFFComponent', () => {
  let component: ValiderHeureSuppAeFFComponent;
  let fixture: ComponentFixture<ValiderHeureSuppAeFFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderHeureSuppAeFFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiderHeureSuppAeFFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
