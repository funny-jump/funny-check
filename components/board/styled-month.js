'use client';

import styled from 'styled-components';

const StyledMonth = styled.div`
  width: 98%;
  height: 100%;
  margin: 0 1%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function StyledCalendarMonth({ children }) {
  return <StyledMonth>{children}</StyledMonth>;
}

export default StyledCalendarMonth;
