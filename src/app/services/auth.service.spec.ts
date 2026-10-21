import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    sessionStorage.clear();
  });

  afterEach(() => sessionStorage.clear());

  it('autentica qualquer credencial informada', () => {
    const session = service.login('qualquer-email', 'qualquer-senha');

    expect(session.user.email).toBe('qualquer-email');
    expect(session.token).toContain('mock-token-');
    expect(service.isAuthenticated()).toBeTrue();
  });

  it('remove a sessao ao sair', () => {
    service.login('usuario', 'senha');

    service.logout();

    expect(service.isAuthenticated()).toBeFalse();
  });
});
