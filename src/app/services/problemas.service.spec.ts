import { TestBed } from '@angular/core/testing';

import { ProblemaService } from './problemas.service';

describe('ProblemasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProblemaService = TestBed.get(ProblemaService);
    expect(service).toBeTruthy();
  });
});
