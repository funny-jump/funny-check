export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;
export const middleware = async (req) => {
  const token = await getToken({ req, secret });

  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl.origin));
  }
  return NextResponse.next({});
};

export const config = {
  matcher: ["/board:path*", "/api/edit-info", "/edit-info"],
};
