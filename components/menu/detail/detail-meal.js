'use client';

import styled from 'styled-components';

import MenuMeal from '../menu-meal';

const StyledMeal = styled.div``;
const StyledHeader = styled.header``;

function DetailMeal({ title, menus }) {
  return (
    <StyledMeal>
      <StyledHeader>
        <h3>{title}</h3>
      </StyledHeader>
      <MenuMeal menus={menus} />
    </StyledMeal>
  );
}

export default DetailMeal;
