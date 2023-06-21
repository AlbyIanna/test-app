import { debounce } from "lodash";
import { useCallback, useMemo, useState } from "react";


export const Search = (props) => {
  const { initialQuery, onChange, debounceTime = 0 } = props;
  const [query, setQuery] = useState(initialQuery + '')
  const debouncedOnChange = useMemo(() => debounce(onChange, debounceTime), [debounceTime, onChange])

  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
    debouncedOnChange(e.target.value);
    console.log('debouncedOnChange', debouncedOnChange)
  }, [debouncedOnChange, setQuery]);

  return (
    <input type='search'
      placeholder='Search...'
      value={query}
      onChange={handleChange} />
  );
};

