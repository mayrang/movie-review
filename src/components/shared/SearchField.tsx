"use client";
import { forwardRef } from "react";
import SearchInput from "./SearchInput";

const SearchField = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ onFocus, onBlur, ...props }, ref) => {
  return <SearchInput ref={ref} {...props} />;
});

SearchField.displayName = "SearchField";

export default SearchField;
