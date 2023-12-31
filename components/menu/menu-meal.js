'use client';

import styled from 'styled-components';

const StyledMenuMeal = styled.table`
  width: 100%;
  margin-top: 1rem;
`;

function MenuMeal({ menus }) {
  return (
    <StyledMenuMeal>
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
        {menus?.map((menu, index) => (
          <tr key={index}>
            <td>{menu.name}</td>
            <td>{menu.carbohydrate}</td>
            <td>{menu.protein}</td>
            <td>{menu.province}</td>
            <td>{menu.calorie}</td>
          </tr>
        ))}
      </tbody>
    </StyledMenuMeal>
  );
}

export default MenuMeal;
