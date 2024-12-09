/* eslint-disable @typescript-eslint/no-unused-vars */
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// This will initialize Clerk middleware
export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

const isPublicRoute = createRouteMatcher(['/sign-in(.*)'])

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)", // For admin pages
]);

// Config for route matching and public routes
export const config = {
  // This matcher ensures Clerk middleware is applied to certain routes, while excluding static and internal files
  matcher: [
    // Exclude Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always apply Clerk middleware to API routes
    '/(api|trpc)(.*)',
    // Apply Clerk middleware to protected routes (like /admin)
    '/admin(.*)', // Or use a wildcard for your protected routes
  ],
  // Define public routes that should not require authentication
  publicRoutes: [
    "/sign-in(.*)",  // Sign-in pages
    "/landing(.*)",  // Landing pages
    "/about",        // Public about page
    "/unauthorized", // Unauthorized page
  ]
};
