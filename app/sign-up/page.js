import SignUpForm from "../../components/auth/signup-form";

export const metadata = {
  title: "sign up page",
  description: "sign up page, input your name, email, password",
};

const SignUpPage = () => {
  return (
    <>
      <SignUpForm />
    </>
  );
};
export default SignUpPage;
