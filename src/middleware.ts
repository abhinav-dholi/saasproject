import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:["/site", "api/upload"]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};