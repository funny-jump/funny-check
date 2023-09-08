"use client";
import { redirect } from "next/navigation";
import styled from "styled-components";

import { useSession } from "next-auth/react";
import SearchList from "@/components/search-list";
import SearchDetail from "@/components/search-datail";
import { useState } from "react";

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Search = () => {
  const [search, setSearch] = useState([]);

  const getFood = (item) => {
    setSearch(item);
    console.log("search/page.js : searched item : ", item);
  };
  const { data: session, state } = useSession();
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <Box>
      <div>
        <SearchDetail getFood={getFood} />
        <SearchList search={search} setSearch={setSearch} />
      </div>
    </Box>
  );
};

export default Search;
