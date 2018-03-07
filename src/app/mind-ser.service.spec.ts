import { TestBed, inject } from '@angular/core/testing';

import { MindSerService } from './mind-ser.service';

describe('MindSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MindSerService]
    });
  });

  it('should be created', inject([MindSerService], (service: MindSerService) => {
    expect(service).toBeTruthy();
  }));
});
