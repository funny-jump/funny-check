'use client';

import styled, { css } from 'styled-components';

const StyledDateBox = styled.div`
  width: 13%;
  height: 85%;
  border: 0.04rem solid rgba(128, 128, 128, 0.4);
  border-radius: 0.19rem;

  background: ${props => (props.$isNowDate ? '#f4f0f0' : `#ffffff`)};

  a {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: black;
    text-decoration: none;
    ${props =>
      props.$isSameMonth ||
      css`
        color: rgba(128, 128, 128, 0.4);
        pointer-events: none;
        cursor: default;
      `}
  }

  time {
    display: block;
    width: 90%;
    height: 20%;
  }

  div {
    width: 80%;
  }

  ${props =>
    props.$isSameMonth
      ? css`
          &:hover {
            cursor: pointer;
            transition: 0.2ms ease-in-out;
            transform: scale(1.01);
            box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(51, 204, 51, 0.2);
            color: #ff0d64;
          }
        `
      : css`
          &:hover {
            cursor: default;
          }
        `}
`;

function StyledCalendarDate({ isSameMonth, isNowDate, children }) {
  return (
    <StyledDateBox $isSameMonth={isSameMonth} $isNowDate={isNowDate}>
      {children}
    </StyledDateBox>
  );
}

export default StyledCalendarDate;
