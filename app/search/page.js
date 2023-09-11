"use client";

import styled from "styled-components";

import SearchList from "@/components/search-list";
import SearchDetail from "@/components/search-datail";
import { useState } from "react";
// import Pagenation from "@/components/pagination";

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
