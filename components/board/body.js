'use client';

import Link from 'next/link';
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

import StyledCalendarMonth from './styled-month';
import StyledCalendarWeek from './styled-week';
import StyledCalendarDate from './styled-date';

function CalendarBody({ states: { viewNow }, now }) {
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
        str: format(date, 'yyyy-MM-dd'),
        date: format(date, 'd'),
        isSameMonth: isSameMonth(date, monthStart),
        isNowDate: isSameDay(date, now),
      };

      dates.push(dateInfo);

      date = addDays(date, 1);
    }

    weeks.push(dates);
  }

  return (
    <StyledCalendarMonth>
      {weeks.map((week, index) => (
        <StyledCalendarWeek key={index}>
          {week.map((dateInfo, index) => (
            <StyledCalendarDate
              key={index}
              isSameMonth={dateInfo.isSameMonth}
              isNowDate={dateInfo.isNowDate}>
              <Link href={`/menu-detail/${dateInfo.str}`}>
                <time>{dateInfo.date}</time>
                <div>dummy</div>
              </Link>
            </StyledCalendarDate>
          ))}
        </StyledCalendarWeek>
      ))}
    </StyledCalendarMonth>
  );
}

export default CalendarBody;
