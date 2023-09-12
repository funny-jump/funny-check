import Modal from '@/components/ui/board-modal';
import MenuDetail from '@/components/menu/detail';

const DUMMY = [];

function BoardModal({ params }) {
  const date = params.date;

  return (
    <Modal date={date}>
      <MenuDetail menus={DUMMY} />
    </Modal>
  );
}

export default BoardModal;
