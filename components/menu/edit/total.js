'use client';

function MenuTotal({ totals }) {
  return (
    <>
      <h3>Total</h3>
      <table>
        <thead>
          <tr>
            <th>탄수화물</th>
            <th>단백질</th>
            <th>지방</th>
            <th>칼로리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totals.carbohydrate}</td>
            <td>{totals.protein}</td>
            <td>{totals.province}</td>
            <td>{totals.calorie}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default MenuTotal;
