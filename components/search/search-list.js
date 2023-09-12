"use client";
import styled from "styled-components";
import SearchListItem from "./search-list-item";
import { useEffect, useState } from "react";
import Pagenation from "./pagination";

const SearchListBox = styled.div`
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
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const perPage = 10;
  const totalPage = 637;
  const start = perPage * page - perPage;
  const end = start + perPage;

  const initSearch = () => {
    setSearch("");
    setPage(1);
  };

  useEffect(() => {
    setLoading(true);
    if (search.length === 0) {
      fetch(`/api/search`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else {
      setLoading(false);
      setData(search);
    }
  }, [search]);

  return (
    <>
      <SearchListBox>
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
          {!loading ? (
            <tbody>
              {search.length === 0
                ? data.slice(start, end).map((m) => (
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
          ) : (
            <tbody>
              <h1>로딩페이지</h1>
            </tbody>
          )}
        </table>
      </SearchListBox>
      {search.length === 0 && (
        <Pagenation
          postsPerPage={perPage}
          totalPosts={totalPage}
          setPage={setPage}
        ></Pagenation>
      )}
    </>
  );
};

export default SearchList;
