export {};

// Create a type for the roles
export type Role = {role :"ADMIN" | "MANAGER" | "USER" };

declare global {
  interface CustomJwtSessionClaims {
      role?: Role;
  }
}
