/* This line of code is exporting a constant variable named `publicRoutes` that contains an array with
a single string element `"/"`. This variable can be imported and used in other modules or files
within the TypeScript project. */
// @type {string[]}

export const publicRoutes = ["/","/auth/new-verification"];

export const authRoutes = ["/auth/login", "/auth/register" ,"/auth/error"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
