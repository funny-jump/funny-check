'use client';

import { useState } from 'react';
import styled from 'styled-components';

import MenuTotal from '../menu-total';
import EditMeal from './edit-meal';

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

      const data = await res.json();

      console.log(data.message);
    },
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
        <MenuTotal menus={[...bMeal, ...lMeal, ...dMeal]} />
      </StyledEdit>
    </form>
  );
}

export default MenuEdit;
