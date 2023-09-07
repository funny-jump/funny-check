'use-client';

import styled, { css } from 'styled-components';
import {
  startOfMonth,
  endOfMonth,
  isSameMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  addDays,
  format,
} from 'date-fns';

const StyledUl = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledWeek = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StyledLi = styled.li`
  width: 13.5%;
  height: 93%;
`;
const DateWrapper = styled.div`
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  border: 0.04rem solid rgba(128, 128, 128, 0.4);
  border-radius: 0.19rem;
  padding: 0.5rem;

  background: ${props => (props.$isSameDay ? '#f4f0f0' : `#ffffff`)};
  color: ${props =>
    props.$isSameMonth ? '#000000' : 'rgba(128, 128, 128, 0.4)'};

  ${props =>
    props.$isSameMonth &&
    css`
      &:hover {
        cursor: pointer;
        transition: 0.2ms ease-in-out;
        transform: scale(1.01);
        /* box-shadow: 0.1rem 0.1rem 0 0 rgba(104, 104, 104, 0.2); */
        box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(51, 204, 51, 0.2);
        /* border: 0.15rem solid green; */
        /* background: rgba(128, 128, 128, 0.4); */
        color: #ff0d64;
      }
    `}
`;
const StyledDate = styled.div`
  width: 100%;
`;
const StyledContent = styled.div`
  width: 100%;
  height: calc(100% - 1rem);
`;

function CalendarMonthBody({ states: { viewNow }, now }) {
  const monthStart = startOfMonth(viewNow);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const weeks = [];

  let date = startDate;
  while (date <= endDate) {
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const dateInfo = {
        date: format(date, 'd'),
        isSameMonth: isSameMonth(date, monthStart),
        isSameDay: isSameDay(date, now),
      };
      dates.push(dateInfo);

      date = addDays(date, 1);
    }

    weeks.push(dates);
  }

  return (
    <>
      <StyledUl>
        {weeks.map((week, index) => (
          <StyledWeek key={index}>
            {week.map((dateInfo, index) => (
              <StyledLi key={index}>
                <DateWrapper
                  // disabled={!dateInfo.isSameMonth}
                  $isSameMonth={dateInfo.isSameMonth}
                  $isSameDay={dateInfo.isSameDay}>
                  <StyledDate>{dateInfo.date}</StyledDate>
                  <StyledContent>dummy</StyledContent>
                </DateWrapper>
              </StyledLi>
            ))}
          </StyledWeek>
        ))}
      </StyledUl>
    </>
  );
}

export default CalendarMonthBody;
