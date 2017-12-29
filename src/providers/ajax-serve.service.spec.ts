import { TestBed, inject } from '@angular/core/testing';

import { AjaxServeService } from './ajax-serve.service';

describe('AjaxServeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjaxServeService]
    });
  });

  it('should be created', inject([AjaxServeService], (service: AjaxServeService) => {
    expect(service).toBeTruthy();
  }));
});
