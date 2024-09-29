import { type AxiosResponse } from "axios";

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

export interface AuthContext {
  user: User;
  errors: ValidationError["response"]["data"]["errors"] | null;
  isLoading: boolean;

  csrf: () => Promise<AxiosResponse>;
  getAccessToken: () => string;
  getUser: () => Promise<void>;
  login: ({ ...credentials }: { email: string; password: string }) => Promise<void>;
  register: ({ ...credentials }: {
    name: string;
    role: Roles.user | Roles.admin;
    email: string;
    password: string;
    password_confirmation: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
}