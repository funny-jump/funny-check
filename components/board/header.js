'use client';

import styled from 'styled-components';
import { getYear, getMonth } from 'date-fns';

const StyledControler = styled.div`
  width: 100%;
  height: calc(100% - 1rem);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledDays = styled.div`
  width: 100%;
  height: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-align: left;

  h4 {
    width: 100%;
    height: auto;
  }
`;

const StyledMonth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :last-child {
    margin-left: 0.5rem;
  }
`;

const StyledNav = styled.nav``;

function BoardHeader({ handlers, states }) {
  const year = getYear(states.viewNow);
  const month = getMonth(states.viewNow) + 1;
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <>
      <StyledControler>
        <StyledMonth>
          <h2>{month}월</h2>
          <h3>{year}</h3>
        </StyledMonth>
        <StyledNav>
          {/* <button onClick={handlers.toggle}>{states.isMonth ? '월' : '주'}</button> */}
          <button onClick={handlers.preMonth}>{'<'}</button>
          <button onClick={handlers.nextMonth}>{'>'}</button>
        </StyledNav>
      </StyledControler>
      <StyledDays>
        {days.map((date, index) => (
          <h4 key={index}>{date}</h4>
        ))}
      </StyledDays>
    </>
  );
}

export default BoardHeader;
