"use client";
import { redirect } from "next/navigation";

import { useSession } from "next-auth/react";

const Search = () => {
  const { data: session, state } = useSession();
  if (!session) {
    redirect("/sign-in");
  }
  return <div>{session ? <h1>search</h1> : <h1>로그인이 필요합니다</h1>}</div>;
};

export default Search;
