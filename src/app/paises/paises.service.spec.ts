/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaisesServiceService } from './paises.service';

describe('Service: PaisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaisesServiceService]
    });
  });

  it('should ...', inject([PaisesServiceService], (service: PaisesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
