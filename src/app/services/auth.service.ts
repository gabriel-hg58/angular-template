import { Injectable } from '@angular/core';

export interface MockAuthSession {
  token: string;
  user: {
    email: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'mock-auth-session';

  login(email: string, _password: string): MockAuthSession {
    const session: MockAuthSession = {
      token: `mock-token-${Date.now()}`,
      user: { email }
    };

    sessionStorage.setItem(this.storageKey, JSON.stringify(session));

    return session;
  }

  logout(): void {
    sessionStorage.removeItem(this.storageKey);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem(this.storageKey) !== null;
  }
}
