import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Protected routes — redirect to login if not authenticated
  const protectedPaths = ["/learn", "/profile", "/progress", "/review", "/tutor", "/assessment"];
  const isProtected = protectedPaths.some(path => request.nextUrl.pathname.startsWith(path));

  if (isProtected && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If logged in and trying to access login/register, redirect to learn
  const authPaths = ["/login", "/register"];
  const isAuthPage = authPaths.some(path => request.nextUrl.pathname === path);

  if (isAuthPage && user) {
    return NextResponse.redirect(new URL("/learn", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/learn/:path*",
    "/profile/:path*",
    "/progress/:path*",
    "/review/:path*",
    "/tutor/:path*",
    "/assessment/:path*",
    "/login",
    "/register",
  ],
};
