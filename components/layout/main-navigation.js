import styled from "styled-components";
import Link from "next/link";
import People from "../icons/people";
import Person from "../icons/person";

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
  justify-content: flex-start;
  align-items: center;
  margin-right: 2rem;
  button {
    border: 0;
    background-color: transparent;
    &:hover {
      cursor: pointer;
    }
  }

  button + button {
    margin-left: 1rem;
  }
`;
const MainNavigation = () => {
  return (
    <Header>
      <Logo>
        <Link href="/">FUNNY CHECK</Link>
      </Logo>
      <nav>
        {/* 나머지 page 구현 후 navigation link url 수정 필요 */}
        <Categoris>
          <li>
            <Link href="/">TODAY</Link>
          </li>
          <li>
            <Link href="/">식단표</Link>
          </li>
          <li>
            <Link href="/">식품검색</Link>
          </li>
          <li>
            <Link href="/">일지 템플릿</Link>
          </li>
        </Categoris>
      </nav>
      <UserInfo>
        <button type="button">
          <People />
        </button>
        <button type="button">
          <Person />
        </button>
      </UserInfo>
    </Header>
  );
};
export default MainNavigation;
