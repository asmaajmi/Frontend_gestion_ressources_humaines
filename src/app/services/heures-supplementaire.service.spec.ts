import { TestBed } from '@angular/core/testing';
import { HeuresSupplementaireService } from './heures-supplementaire.service';


describe('HeuresSupplementaireService', () => {
  let service: HeuresSupplementaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeuresSupplementaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
