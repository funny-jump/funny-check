"use client";
import styled from "styled-components";
import Link from "next/link";
import People from "../icons/people";
import Person from "../icons/person";
import { signOut, useSession } from "next-auth/react";

const Header = styled.div`
  width: 100%;
  height: 7rem;
  background-color: #fcfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  margin-left: 4rem;
  margin-right: 12rem;
  text-decoration-line: none;
  a {
    text-decoration: none;
    color: #ff0d64;
  }
`;
const Categoris = styled.ul`
  display: flex;
  margin-right: 8rem;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  list-style-type: none;
  a {
    text-decoration: none;
    color: #000000;
    &:hover {
      color: #ff0d64;
    }
  }
  li + li {
    margin-left: 2rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  position: relative;
  span {
    margin-left: 1rem;
    a {
      color: black;
      text-decoration: none;
      &:hover {
        color: gray;
      }
    }
  }

  button {
    font-size: 1rem;
    padding: 0;
    border: 0;
    background-color: transparent;
    &:hover {
      cursor: pointer;
    }
  }

  button + button {
    margin-left: 1rem;
  }
  ul {
    li {
      position: relative;

      ul {
        width: 10rem;
        height: auto;
        position: absolute;
        visibility: hidden;
        background-color: white;

        z-index: 2;
        border: 1rem;
        li {
          padding: 0.4rem;
          &:hover {
            background-color: #fcfbfb;
          }
          margin: 0.5rem;
          a {
            font-size: 1rem;
            color: black;
            text-decoration: none;
          }
        }
      }
      &:hover {
        ul {
          visibility: visible;
        }
      }
    }
  }
`;
const MainNavigation = () => {
  const onClickHandler = () => {
    //친구 리스트 모달 불러오기
  };
  const logOut = () => {
    signOut();
  };
  const { data: session, state } = useSession();
  return (
    <Header>
      <Logo>
        <Link href="/">FUNNY CHECK</Link>
      </Logo>
      <nav>
        {/* 나머지 page 구현 후 navigation link url 수정 필요 */}
        <Categoris>
          <li>
            <Link href="/today">TODAY</Link>
          </li>
          <li>
            <Link href="/board">식단표</Link>
          </li>
          <li>
            <Link href="/search">식품검색</Link>
          </li>
          <li>
            <Link href="/template">일지 템플릿</Link>
          </li>
        </Categoris>
      </nav>
      <UserInfo>
        {session != null ? (
          <ul>
            <li>
              <Link href="/sign-in">
                <button type="button">
                  <Person />
                </button>
              </Link>
              <ul>
                <li>이메일 : {session.user.email} </li>
                <li>
                  <button type="button" onClick={onClickHandler}>
                    친구 리스트
                  </button>
                </li>
                <li>
                  <Link href="/edit-info">개인정보 수정</Link>
                </li>
                <li>
                  <Link href="weight-data">체중변화</Link>
                </li>
                <li>
                  <button type="button" onClick={logOut}>
                    로그아웃
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        ) : (
          <>
            <span>
              <Link href="/sign-in">로그인</Link>
            </span>
            <span>
              <h1>/</h1>
            </span>
            <span>
              <Link href="/sign-up">회원가입</Link>
            </span>
          </>
        )}
      </UserInfo>
    </Header>
  );
};
export default MainNavigation;
