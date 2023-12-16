import { useDispatch } from "react-redux";
import { filterSearch } from "../../redux/filterSearch/filterSearchSlice";
import { IoSearchOutline } from "react-icons/io5";
import {
  SearchContainer,
  SearchInput,
  SearchLabel,
} from "./FilterSearch.styled";

export default function FilterSearch() {
  const dispatch = useDispatch();

  const handleFilterSearch = (e) => {
    const { value } = e.currentTarget;

    dispatch(filterSearch(value.toLowerCase().trim()));
  };

  return (
    <SearchContainer>
      <SearchLabel htmlFor="searchInput">
        Search for contacts
        <IoSearchOutline />
      </SearchLabel>
      <SearchInput
        id="searchInput"
        type="text"
        onChange={handleFilterSearch}
        placeholder="Enter name"
      />
    </SearchContainer>
  );
}
