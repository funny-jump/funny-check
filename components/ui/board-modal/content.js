'use client';

import { forwardRef } from 'react';
import { DialogContent, Title, Close } from '@radix-ui/react-dialog';
import styled from 'styled-components';

const StyledDialogContent = styled(DialogContent)`
  width: 70%;
  height: 70%;
  background: white;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
`;

const StyledDialogTitle = styled(Title)`
  margin: 0;
  font-weight: 500;
  font-size: 17px;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  nav {
    padding: 1rem;
    button {
      margin-left: 1rem;
    }
  }
`;

const StyledDialogEdit = styled.button``;
const StyledDialogClose = styled(Close)``;

const ModalContent = forwardRef(({ title, handlers, children }, ref) => (
  <StyledDialogContent ref={ref}>
    <StyledHeader>
      <StyledDialogTitle>{title}</StyledDialogTitle>
      <nav>
        <StyledDialogEdit aria-label="Edit" onClick={handlers.onClickEdit}>
          수정하기
        </StyledDialogEdit>
        <StyledDialogClose asChild>
          <button aria-label="Close">닫기</button>
        </StyledDialogClose>
      </nav>
    </StyledHeader>
    {children}
  </StyledDialogContent>
));

export default ModalContent;
