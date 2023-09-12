"use client";

import { useState } from "react";
import styled from "styled-components";

const pageListNum = 8;

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  padding: 1px;
`;
const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
`;
const PageButton = styled.button`
  border: 0;
  background: none;
  &:disabled {
    color: #ff0d64;
  }
  &:hover {
    cursor: pointer;
    color: #ff0d64;
  }
`;
const NavButton = styled.button`
  border: 0;
  background: none;
  &:hover {
    cursor: pointer;
    color: #ff0d64;
  }
`;

const Pagenation = ({ postsPerPage, totalPosts, setPage }) => {
  const [index, setIndex] = useState(1);
  const [isSeleted, setIsSelected] = useState(
    new Array(pageListNum).fill(false)
  );

  const onClickHandler = (number, index) => {
    setPage(number);
    setIsSelected(isSeleted.map((n, i) => (i == index ? true : false)));
  };

  const start = pageListNum * index - pageListNum;
  const end = start + pageListNum;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <footer>
      <nav>
        <PageUl>
          <NavButton
            type="button"
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setPage(start);
                setIsSelected(
                  isSeleted.map((m, i) => (i == pageListNum - 1 ? true : false))
                );
              }
            }}
          >
            {"<"}
          </NavButton>
          {pageNumbers.slice(start, end).map((number, index) => (
            <PageLi key={number} className="page-item">
              <PageButton
                disabled={isSeleted[index]}
                onClick={() => onClickHandler(number, index)}
              >
                {number}
              </PageButton>
            </PageLi>
          ))}
          <NavButton
            type="button"
            onClick={() => {
              if (index < 22) {
                setIndex(index + 1);
                setPage(end + 1);
                setIsSelected(isSeleted.map((m, i) => (i == 0 ? true : false)));
              }
            }}
          >
            {">"}
          </NavButton>
        </PageUl>
      </nav>
    </footer>
  );
};

export default Pagenation;
