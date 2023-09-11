export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const middleware = async (req) => {
  const { cookies } = req;
  const hasCookie = cookies.has("next-auth.session-token");
  if (!hasCookie) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl.origin));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/board:path*", "/api/edit-info", "/edit-info"],
};
