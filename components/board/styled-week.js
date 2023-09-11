'use client';

import styled from 'styled-components';

const StyledWeek = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function StyledCalendarWeek({ children }) {
  return <StyledWeek>{children}</StyledWeek>;
}

export default StyledCalendarWeek;
