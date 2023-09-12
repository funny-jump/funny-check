'use client';

import styled from 'styled-components';

const StyledMenuTotal = styled.table`
  width: 100%;
  margin-top: 1rem;
`;

function MenuTotal({ menus }) {
  const total = menus.reduce(
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

  return (
    <div>
      <h3>Total</h3>
      <StyledMenuTotal>
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
            <td>{total.carbohydrate.toFixed(2)}</td>
            <td>{total.protein.toFixed(2)}</td>
            <td>{total.province.toFixed(2)}</td>
            <td>{total.calorie.toFixed(2)}</td>
          </tr>
        </tbody>
      </StyledMenuTotal>
    </div>
  );
}

export default MenuTotal;
