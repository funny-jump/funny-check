"use client";
import { useRef } from "react";
import styled from "styled-components";

const Box = styled.div`
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
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const searchData = {
      data: inputData.current.value,
    };
    fetch("/api/search", {
      method: "POST",
      body: JSON.stringify(searchData),
    })
      .then((res) => res.json())
      .then((data) => {
        props.getFood(data);
      });
  };

  return (
    <Box>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="search" ref={inputData}></input>
        <button>검색</button>
      </form>
    </Box>
  );
};

export default SearchDetail;
