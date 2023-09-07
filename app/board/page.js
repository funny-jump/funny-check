import Board from './board';

function BoardPage() {
  const now = Date.now();

  return <Board now={now} />;
}

export default BoardPage;
