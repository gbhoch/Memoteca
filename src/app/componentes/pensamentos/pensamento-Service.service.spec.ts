/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PensamentoServiceService } from './pensamento-Service.service';

describe('Service: PensamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PensamentoServiceService]
    });
  });

  it('should ...', inject([PensamentoServiceService], (service: PensamentoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
