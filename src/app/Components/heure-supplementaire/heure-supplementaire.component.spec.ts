import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeureSupplementaireComponent } from './heure-supplementaire.component';

describe('HeureSupplementaireComponent', () => {
  let component: HeureSupplementaireComponent;
  let fixture: ComponentFixture<HeureSupplementaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeureSupplementaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeureSupplementaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
