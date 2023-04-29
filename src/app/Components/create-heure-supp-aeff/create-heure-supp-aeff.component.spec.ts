import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeureSuppAEffComponent } from './create-heure-supp-aeff.component';

describe('CreateHeureSuppAEffComponent', () => {
  let component: CreateHeureSuppAEffComponent;
  let fixture: ComponentFixture<CreateHeureSuppAEffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHeureSuppAEffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHeureSuppAEffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
