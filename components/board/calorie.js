import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { MongoClient } from 'mongodb';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getDbUrl } from '@/utils';

const getMealTotalCalorie = meal =>
  meal.reduce((acc, cur) => acc + Number(cur.calorie), 0);

const getDietTotalCalories = diet => {
  const breakfastTotalCalorie = getMealTotalCalorie(diet.breakfast);
  const lunchTotalCalorie = getMealTotalCalorie(diet.lunch);
  const dinnerTotalCalorie = getMealTotalCalorie(diet.dinner);
  return breakfastTotalCalorie + lunchTotalCalorie + dinnerTotalCalorie;
};

async function Calorie({ date }) {
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

  const diet = user.diets[date];
  const cal = diet ? getDietTotalCalories(diet) : undefined;

  client.close();

  <div>{cal && `cals: ${cal}`}</div>;
}

export default Calorie;
