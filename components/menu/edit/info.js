async function MenuInfo({ menu }) {
  const url = getCalInfoAPIUrl();

  const res = await fetch(url);

  const data = await res.json();

  // console.log(data);

  return (
    <>
      <input readOnly />
      <input readOnly />
      <input readOnly />
      <input readOnly />
    </>
  );
}

export default MenuInfo;
