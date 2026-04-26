import { TestBed } from '@angular/core/testing';

import { Nivelinteres } from './nivelinteres';

describe('Nivelinteres', () => {
  let service: Nivelinteres;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nivelinteres);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
