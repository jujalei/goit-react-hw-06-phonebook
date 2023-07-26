import { useDispatch } from 'react-redux';

import {
  FilterWrap,
  FilterInput,
  InputWrapper,
  FilterClearBtn,
} from './Filter.styled';

import { searchContact } from 'redux/filterSlice';
import { useEffect, useState } from 'react';

export function Filter() {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchContact(filter.toString()));
  }, [filter, dispatch]);

  const handleFilterClear = () => setFilter('');

  return (
    <FilterWrap>
      <InputWrapper>
        <label>
          Find contacts by name
          <FilterInput
            name="text"
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </label>
        <FilterClearBtn type="button" onClick={handleFilterClear}>
          &times;
        </FilterClearBtn>
      </InputWrapper>
    </FilterWrap>
  );
}
