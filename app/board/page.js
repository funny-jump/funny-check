import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '../api/auth/[...nextauth]/route';
import Board from '@/components/board';

async function BoardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign-in');
  }

  const now = Date.now();

  return <Board now={now} />;
}

export default BoardPage;
