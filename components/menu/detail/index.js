'use client';

import styled from 'styled-components';

import MenuTotal from '../menu-total';
import DetailMeal from './detail-meal';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledDetail = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function MenuDetail({ diet }) {
  const { breakfast, lunch, dinner } = diet;

  return (
    <StyledDetail>
      <DetailMeal title="아침" menus={breakfast} />
      <DetailMeal title="점심" menus={lunch} />
      <DetailMeal title="저녁" menus={dinner} />
      <MenuTotal menus={[...breakfast, ...lunch, ...dinner]} />
    </StyledDetail>
  );
}

export default MenuDetail;
