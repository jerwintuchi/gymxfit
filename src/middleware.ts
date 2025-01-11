import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
        const authObject = await auth();
        const { sessionClaims } = authObject || {};
        const userRole = sessionClaims?.role?.role;

        /* if(userRole) {
          console.log("Request URL:", req.nextUrl.pathname); // Log the pathname
          console.log("Auth Object:", authObject); // Log the entire auth object
          console.log("Session Claims:", sessionClaims); // Log session claims
          console.log("Role from sessionClaims:", userRole, "Type:", typeof userRole);
        } */
        
        if (isPublicRoute(req)) {
            console.log("Public route accessed:", req.nextUrl.pathname);
            return NextResponse.next();
        }

        if (!authObject || !authObject.sessionId) {
            console.log("User not authenticated. Redirecting to sign-in.");
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }

        if (isProtectedRoute(req)) {
            auth.protect(); // Ensure user is signed in

            if (userRole !== "ADMIN") {
                console.log("User is unauthorized, role is", userRole, "Redirecting to /unauthorized");
                return NextResponse.redirect(new URL("/unauthorized", req.url));
            }

            console.log("User is authorized, role is", userRole);
        }
    
});

const isPublicRoute = createRouteMatcher([
    "/sign-in(.*)",
    "/unauthorized",
]);

const isProtectedRoute = createRouteMatcher([
    "/(.*)", // Matches all routes
]);

export const config = {
    matcher: [
        '/((?!_next|static|favicon.ico|api|trpc|sign-in|unauthorized).*)', // Exclude _next, static, API routes, sign-in, and unauthorized
    ],
    publicRoutes: ["/sign-in(.*)", "/unauthorized"],
};