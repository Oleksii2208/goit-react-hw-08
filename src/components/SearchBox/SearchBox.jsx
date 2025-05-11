import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleFilterChange = (filter) => dispatch(changeFilter(filter));
  return (
    <div>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
