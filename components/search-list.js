"use client";
import styled from "styled-components";
import SearchListItem from "./search-list-item";
import { useEffect, useState } from "react";

const ListBox = styled.div`
  margin-top: 1rem;
  table {
    border: 1px solid #444444;
    border-collapse: collapse;
  }
  tr,
  td {
    border: 1px solid #444444;
    padding: 10px;
  }
  thead {
    background-color: black;
    color: white;
  }
`;

const SearchList = ({ search, setSearch }) => {
  const initSearch = () => {
    setSearch("");
  };
  const [data, setData] = useState([]);
  console.log("search-list search : ", search);
  useEffect(() => {
    if (search.length === 0) {
      console.log("search-list search is null: ");
      fetch("/api/search")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } else {
      console.log("search-list search is not tnull: ");
      setData(search);
    }
  }, [search]);

  return (
    <ListBox>
      <button type="button" onClick={initSearch}>
        전체보기
      </button>
      <table>
        <thead>
          <tr>
            <td>{"음식명"}</td>
            <td>{"탄수화물"}</td>
            <td>{"단백질(g)"}</td>
            <td>{"지방(g)"}</td>
            <td>{"칼로리(1인분 기준)"}</td>
          </tr>
        </thead>
        <tbody>
          {search.length === 0
            ? data.map((m) => (
                <tr>
                  <SearchListItem
                    kcal={m["1인분칼로리(kcal)"]}
                    name={m["음식명"]}
                    carbohydrate={m["탄수화물(g)"]}
                    protein={m["탄수화물(g)"]}
                    lipid={m["지방(g)"]}
                  ></SearchListItem>
                </tr>
              ))
            : data.map((m) => (
                <tr>
                  <SearchListItem
                    kcal={m["1인분칼로리(kcal)"]}
                    name={m["음식명"]}
                    carbohydrate={m["탄수화물(g)"]}
                    protein={m["탄수화물(g)"]}
                    lipid={m["지방(g)"]}
                  ></SearchListItem>
                </tr>
              ))}
        </tbody>
      </table>
    </ListBox>
  );
};

export default SearchList;
