'use client';

import { useState } from 'react';
import styled from 'styled-components';

import MenuTotal from './total';
import EditMeal from './meal';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledEdit = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const totalCal = arr =>
  arr.reduce(
    (acc, cur) => ({
      carbohydrate: acc.carbohydrate + cur.carbohydrate,
      protein: acc.protein + cur.protein,
      province: acc.province + cur.province,
      calorie: acc.calorie + cur.calorie,
    }),
    {
      carbohydrate: 0,
      protein: 0,
      province: 0,
      calorie: 0,
    }
  );

function MenuEdit({ date, diet }) {
  const { breakfast, lunch, dinner } = diet;

  const [bMeal, setBMeal] = useState(breakfast);
  const [lMeal, setLMeal] = useState(lunch);
  const [dMeal, setDMeal] = useState(dinner);

  const handlers = {
    onSubmit: async event => {
      event.preventDefault();

      const body = { date, breakfast: bMeal, lunch: lMeal, dinner: dMeal };

      const res = await fetch('/api/menu/edit', {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json',
        },
      });

      // const data = await res.json();

      // console.log(data.message);
    },
  };

  const breakfastTotal = totalCal(bMeal);
  const lunchTotal = totalCal(lMeal);
  const dinnerTotal = totalCal(dMeal);

  const totals = {
    name: 'total',
    ...totalCal([breakfastTotal, lunchTotal, dinnerTotal]),
  };

  return (
    <form onSubmit={handlers.onSubmit}>
      <StyledHeader>
        <h2>{date}</h2>
        <button>완료</button>
      </StyledHeader>
      <StyledEdit>
        <EditMeal title="아침" menus={bMeal} addMenu={setBMeal} />
        <EditMeal title="점심" menus={lMeal} addMenu={setLMeal} />
        <EditMeal title="저녁" menus={dMeal} addMenu={setDMeal} />
        <MenuTotal totals={totals} />
      </StyledEdit>
    </form>
  );
}

export default MenuEdit;
