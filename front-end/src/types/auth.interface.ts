export enum Roles {
  user = "user",
  admin = "admin",
  guest = "guest",
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  role: Roles.user | Roles.admin | Roles.guest;
}

export interface ValidationError {
  response: {
    data: {
      errors: {
        email?: string[];
        password?: string[];
      }
    }
  };
  status: number;
}

export interface RegisteredUser {
  name: User["name"];
  role: Roles.user | Roles.admin;
  email: User["email"];
  password: string;
  password_confirmation: string; 
}

export interface AuthContext {
  user: User;
  errors: ValidationError["response"]["data"]["errors"] | null;
  isLoading: boolean;

  csrf: () => Promise<void>;
  getAccessToken: () => string;
  getUser: () => Promise<void>;
  login: ({ ...credentials }: { email: string; password: string }) => Promise<void>;
  register: ({ ...credentials }: RegisteredUser) => Promise<void>;
  logout: () => Promise<void>;
}