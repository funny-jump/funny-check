"use client";

import styled from "styled-components";

import SearchDetail from "@/components/search/search-datail";
import SearchList from "@/components/search/search-list";
import { useState } from "react";
// import Pagenation from "@/components/pagination";

export const metadata = {
  title: "search page",
  description:
    "search page, this page view all food data in database. if you search food data, input food name and click search button",
};

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Search = () => {
  const [search, setSearch] = useState([]);

  const getFood = (item) => {
    setSearch(item);
  };

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
