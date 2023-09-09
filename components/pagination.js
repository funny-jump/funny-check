"use client";

import { useState, useRef } from "react";
import styled from "styled-components";

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

const PageSpan = styled.button`
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
  const pageNumsPerPage = 8;
  const [a, setA] = useState(new Array(pageNumsPerPage).fill(false));

  const onClickHandler = (number, index) => {
    setPage(number);
    setA(a.map((m, i) => (i == index ? true : false)));
  };

  const start = pageNumsPerPage * index - pageNumsPerPage;
  const end = start + pageNumsPerPage;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <PageUl className="pagination">
          <NavButton
            type="button"
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setPage(start);
                setA(
                  a.map((m, i) => (i == pageNumsPerPage - 1 ? true : false))
                );
              }
            }}
          >
            {"<"}
          </NavButton>
          {pageNumbers.slice(start, end).map((number, index) => (
            <PageLi key={number} className="page-item">
              <PageSpan
                disabled={a[index]}
                onClick={() => onClickHandler(number, index)}
                className="page-link"
              >
                {number}
              </PageSpan>
            </PageLi>
          ))}
          <NavButton
            type="button"
            onClick={() => {
              if (index < 22) {
                setIndex(index + 1);
                setPage(end + 1);
                setA(a.map((m, i) => (i == 0 ? true : false)));
              }
            }}
          >
            {">"}
          </NavButton>
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagenation;
