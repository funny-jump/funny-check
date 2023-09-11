"use client";
import { redirect } from "next/navigation";
import EditForm from "@/components/auth/edit-form";
import { useSession } from "next-auth/react";

const EditInfoPage = () => {
  // const { data: session, state } = useSession();
  // if (!session) {
  //   redirect("/sign-in");
  // }
  return (
    <>
      <EditForm />
    </>
  );
};
export default EditInfoPage;
