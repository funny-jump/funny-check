'use client';

import { forwardRef } from 'react';

const SearchMenu = forwardRef(({ handlers }, refs) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search..."
        onChange={handlers.searchInputOnChange}
        ref={refs.searchInput}
      />
      {/* <Dropdown search={searchInputValue} /> */}
      <input readOnly ref={refs.carbohydrate} />
      <input readOnly ref={refs.protein} />
      <input readOnly ref={refs.province} />
      <input readOnly ref={refs.calorie} />
      <button type="button" onClick={handlers.menuInfoOnClick}>
        가져오기
      </button>
      <button type="button" onClick={handlers.menuAddOnClick}>
        추가
      </button>
    </div>
  );
});

export default SearchMenu;
