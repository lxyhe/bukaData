import { TestBed, inject } from '@angular/core/testing';

import { HttpServesService } from './http-serves.service';

describe('HttpServesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpServesService]
    });
  });

  it('should be created', inject([HttpServesService], (service: HttpServesService) => {
    expect(service).toBeTruthy();
  }));
});
