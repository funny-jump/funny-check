import AuthForm from "@/components/auth/auth-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "sign in page",
  description: "sign in page, input your email and password",
};

const SignInPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <>
      <AuthForm />
    </>
  );
};
export default SignInPage;
