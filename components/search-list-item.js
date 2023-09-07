const SearchListItem = ({ kcal, name, carbohydrate, protein, lipid }) => {
  return (
    <>
      <td>{name}</td>
      <td>{carbohydrate}g</td>
      <td>{protein}g</td>
      <td>{lipid}g</td>
      <td>{kcal}kcal</td>
    </>
  );
};

export default SearchListItem;
