import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { getCalInfoAPIUrl, getDbUrl } from '@/utils';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import MenuDetail from '@/components/menu/detail';

const DUMMY = [];

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function MenuDetailPage({ params: { date } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign-in');
  }

  const dbUrl = getDbUrl();
  const foodsUrl = getCalInfoAPIUrl(1, 5);

  const data = await fetchData(foodsUrl);
  console.log(data);

  return <MenuDetail menus={DUMMY} />;
}

export default MenuDetailPage;
