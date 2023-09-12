'use client';

function MenuDetail({ menus }) {
  return (
    <table>
      <thead>
        <tr>
          <th>음식</th>
          <th>탄수화물</th>
          <th>단백질</th>
          <th>지방</th>
          <th>칼로리</th>
        </tr>
      </thead>
      <tbody>
        {menus?.map(menu => (
          <tr key={menu.id}>
            <td>{menu.name}</td>
            <td>{menu.carbohydrate}</td>
            <td>{menu.protein}</td>
            <td>{menu.province}</td>
            <td>{menu.calorie}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MenuDetail;
