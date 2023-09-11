import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { MongoClient } from 'mongodb';

import { getCalInfoAPIUrl, getDbUrl } from '@/utils';
import { authOptions } from '../../auth/[...nextauth]/route';

const POST = async req => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(
      {
        message: '허가되지 않은 사용자 입니다.',
      },
      { status: 405 }
    );
  }

  const request = await req.json();
  const search = request.data;

  const url = getCalInfoAPIUrl();
  const response = await fetch(url);
  const data = await response.json();
  const foods = data.data;

  const foodInfo = foods.find(food => food['음식명'] === search);
  const resObj = foodInfo
    ? {
        name: foodInfo['음식명'],
        carbohydrate: foodInfo['탄수화물(g)'],
        protein: foodInfo['단백질(g)'],
        province: foodInfo['지방(g)'],
        calorie: foodInfo['1인분칼로리(kcal)'],
      }
    : undefined;

  if (resObj) {
    return NextResponse.json(resObj);
  }

  return new Response(null, { status: 204 });
};

const PATCH = async req => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        message: '허가되지 않은 사용자 입니다.',
      },
      { status: 405 }
    );
  }

  const email = session.user.email;

  const request = await req.json();
  const { date, breakfast, lunch, dinner } = request;

  const url = getDbUrl();
  const client = await MongoClient.connect(url);
  const collection = client.db('funny-check').collection('users');

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

  const updatedDiets = user.diets;

  updatedDiets[date] = { breakfast, lunch, dinner };

  await collection.updateOne(
    {
      email,
    },
    { $set: { diets: updatedDiets } }
  );

  client.close();

  return NextResponse.json({
    message: 'Success',
  });
};

export { POST, PATCH };
