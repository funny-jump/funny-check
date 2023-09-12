'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import ModalContent from './content';
import ModalOverlay from './overlay';

const Modal = ({ date, children }) => {
  const router = useRouter();

  const refs = {
    overlay: useRef(),
    content: useRef(),
  };

  const handlers = {
    onOpenChange: open => {
      if (!open) {
        router.back();
      }
    },
    onClickEdit: () => {
      router.push(`/menu-detail/edit/${date}`);
    },
  };

  return (
    <Dialog.Root open onOpenChange={handlers.onOpenChange} modal>
      <Dialog.Portal>
        <ModalOverlay ref={refs.overlay} />
        <ModalContent title={date} handlers={handlers} ref={refs.content}>
          {children}
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
