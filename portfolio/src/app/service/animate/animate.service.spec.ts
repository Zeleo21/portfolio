import { TestBed } from '@angular/core/testing';

import { Animate } from './animate.service';

describe('Animate', () => {
  let service: Animate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Animate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
