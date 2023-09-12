import { getCalInfoAPIUrl } from '@/utils';

async function Dropdown({ search }) {
  const url = search ? getCalInfoAPIUrl() : getCalInfoAPIUrl(1, 5);
  const res = await fetch(url);
  const data = await res.json();

  const foods = data.data;

  console.log(foods);

  return (
    <div>
      <ul></ul>
    </div>
  );
}

export default Dropdown;
