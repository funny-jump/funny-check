import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { MongoClient } from 'mongodb';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
} from 'date-fns';

import { authOptions } from '../api/auth/[...nextauth]/route';
import { getDbUrl } from '@/utils';
import Board from '@/components/board';

const getDietTotalDietInfo = diet =>
  [...diet.breakfast, ...diet.lunch, ...diet.dinner].reduce(
    (acc, cur) => ({
      carbohydrate: acc.carbohydrate + Number(cur.carbohydrate),
      protein: acc.protein + Number(cur.protein),
      province: acc.province + Number(cur.province),
      calorie: acc.calorie + Number(cur.calorie),
    }),
    {
      carbohydrate: 0,
      protein: 0,
      province: 0,
      calorie: 0,
    }
  );

async function BoardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign-in');
  }

  const email = session.user.email;

  const url = getDbUrl();
  const client = await MongoClient.connect(url);

  const db = client.db('funny-check');
  const collection = await db.collection('users');
  const user = await collection.findOne({ email });
  if (!user) {
    client.close();
    return NextResponse.json(
      {
        message: '존재하지 않는 이메일 입니다.',
      },
      { status: 405 }
    );
  }

  const now = Date.now();

  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const totalInfos = {};

  let date = startDate;
  while (date <= endDate) {
    const dateFormat = format(date, 'yyyy-MM-dd');
    const diet = user.diets[dateFormat];

    if (diet) {
      totalInfos[dateFormat] = getDietTotalDietInfo(diet);
    }

    date = addDays(date, 1);
  }

  client.close();

  return <Board now={now} totalInfos={totalInfos} />;
}

export default BoardPage;
