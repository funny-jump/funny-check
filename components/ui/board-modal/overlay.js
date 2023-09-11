'use client';

import { forwardRef } from 'react';
import { Overlay } from '@radix-ui/react-dialog';
import styled from 'styled-components';

const StyledDialogOverlay = styled(Overlay)`
  background-color: black;
  position: fixed;
  inset: 0;
  opacity: 0.7;
`;

const ModalOverlay = forwardRef((_, ref) => <StyledDialogOverlay ref={ref} />);

export default ModalOverlay;
