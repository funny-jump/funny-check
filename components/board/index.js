'use client';

import { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import styled from 'styled-components';

import CalendarHeader from './header';
import CalendarBody from './body';

const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh - 7rem);
`;

const StyledHeaderBox = styled.header`
  width: 100%;
  height: 7%;
  min-height: 2rem;
`;

const StyledCalendarBodyBox = styled.div`
  width: 100%;
  height: 93%;
`;

function Board({ now, totalInfos }) {
  const [isMonth, setIsMonth] = useState(true);
  const [viewNow, setViewNow] = useState(now);

  const controlerStates = {
    isMonth,
    viewNow,
  };

  const claendarStates = {
    isMonth,
    viewNow,
  };

  const controlerHandlers = {
    toggle: () => {
      setIsMonth(!isMonth);
    },
    preMonth: () => {
      setViewNow(subMonths(viewNow, 1));
    },
    nextMonth: () => {
      setViewNow(addMonths(viewNow, 1));
    },
  };

  return (
    <StyledMain>
      <StyledHeaderBox>
        <CalendarHeader handlers={controlerHandlers} states={controlerStates} />
      </StyledHeaderBox>
      <StyledCalendarBodyBox>
        <CalendarBody
          states={claendarStates}
          now={now}
          totalInfos={totalInfos}
        />
      </StyledCalendarBodyBox>
    </StyledMain>
  );
}

export default Board;
