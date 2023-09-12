"use client";
import { useRef } from "react";
import styled from "styled-components";

const SearchBox = styled.div`
  button {
    background-color: black;
    color: white;
    margin-left: 0.2rem;
    border: 0;
    border-radius: 10%;
    &:hover {
      cursor: pointer;
    }
  }
`;
const SearchDetail = (props) => {
  const inputData = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const searchData = {
      data: inputData.current.value,
    };
    const result = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify(searchData),
    });
    const data = await result.json();
    props.getFood(data);
  };

  return (
    <SearchBox>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="search" ref={inputData}></input>
        <button>검색</button>
      </form>
    </SearchBox>
  );
};

export default SearchDetail;
