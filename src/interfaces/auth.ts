export interface AuthUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export interface AuthState {
  user: AuthUser | null;
}
