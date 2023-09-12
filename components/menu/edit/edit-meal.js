'use client';

import { useRef, useState } from 'react';
import styled from 'styled-components';

import MenuSearch from './edit-search';
import MenuMeal from '../menu-meal';

const StyledMeal = styled.div``;
const StyledHeader = styled.header``;

function EditMeal({ title, menus, addMenu }) {
  const [newMenu, setNewMenu] = useState({});

  const refs = {
    searchInput: useRef(),
    carbohydrate: useRef(),
    protein: useRef(),
    province: useRef(),
    calorie: useRef(),
  };

  const handlers = {
    menuInfoOnClick: () => {
      const searchData = {
        data: refs.searchInput.current.value,
      };
      fetch('/api/menu/edit', {
        method: 'POST',
        body: JSON.stringify(searchData),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(res => {
          if (res.status === 204) throw Error('no content');
          return res.json();
        })
        .then(data => {
          refs.carbohydrate.current.value = data.carbohydrate;
          refs.protein.current.value = data.protein;
          refs.province.current.value = data.province;
          refs.calorie.current.value = data.calorie;

          setNewMenu({
            name: data.name,
            carbohydrate: data.carbohydrate,
            protein: data.protein,
            province: data.province,
            calorie: data.calorie,
          });
        })
        .catch(error => {
          console.log(error);
          initInputs();
        });
    },
    menuAddOnClick: () => {
      addMenu([...menus, newMenu]);
      setNewMenu({});
      initInputs();
    },
  };

  const initInputs = () => {
    refs.searchInput.current.value = '';
    refs.carbohydrate.current.value = '';
    refs.protein.current.value = '';
    refs.province.current.value = '';
    refs.calorie.current.value = '';
  };

  return (
    <StyledMeal>
      <StyledHeader>
        <h3>{title}</h3>
      </StyledHeader>
      <MenuSearch handlers={handlers} ref={refs} />
      <MenuMeal menus={menus} />
    </StyledMeal>
  );
}

export default EditMeal;
