import { InputText, SearchIcon } from "core/ui";
import { FunctionComponent, useCallback } from "react";

interface SearchInputProps {
  onChange: (newValue: string) => void;
  value: string | undefined;
  ariaLabel: string;
  placeholder: string;
  id?: string;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  id,
  onChange: _onChange,
  ariaLabel,
  placeholder,
  value,
}) => {
  const onChange = useCallback((e) => _onChange(e.target.value), [_onChange]);
  return (
    <div role="searchbox">
      <InputText
        id={id}
        aria-label={ariaLabel}
        placeholder={placeholder}
        icon={<SearchIcon />}
        isClearable
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
