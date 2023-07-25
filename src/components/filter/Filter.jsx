import {
  FilterWrap,
  FilterInput,
  InputWrapper,
  FilterClearBtn,
} from './Filter.styled';

export function Filter({ searchName, onSearch, clearFilter }) {
  return (
    <FilterWrap>
      <InputWrapper>
        <label>
          Find contacts by name
          <FilterInput
            name="text"
            type="text"
            value={searchName}
            onChange={onSearch}
          />
        </label>
        <FilterClearBtn type="button" onClick={clearFilter}>
          &times;
        </FilterClearBtn>
      </InputWrapper>
    </FilterWrap>
  );
}
