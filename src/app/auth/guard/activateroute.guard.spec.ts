import { TestBed } from '@angular/core/testing';

import { ActivaterouteGuard } from './activateroute.guard';

describe('ActivaterouteGuard', () => {
  let guard: ActivaterouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivaterouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
