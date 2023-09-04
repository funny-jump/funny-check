import AuthForm from "@/components/auth/auth-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const SignInPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("Session", JSON.stringify(session, null, 2));

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
