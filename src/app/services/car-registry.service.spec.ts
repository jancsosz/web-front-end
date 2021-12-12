import { TestBed } from '@angular/core/testing';

import { CarRegistryService } from './car-registry.service';

describe('CarRegistryService', () => {
  let service: CarRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
