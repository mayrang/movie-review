"use client";
import { colors } from "@/styles/colorPallete";
import { typography } from "@/styles/typography";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { LegacyRef } from "react";

const BasicSearchInput = styled.input`
  padding: 12px 4px 12px 0px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: none;
  border-bottom: 2px solid ${colors.base.default};
  ${typography.medium}
`;

interface SearchInput extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: LegacyRef<HTMLInputElement>;
}

function SearchInput(props: SearchInput) {
  return (
    <div css={ContainerStyle}>
      <BasicSearchInput {...props} />
      <SearchIcon />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      css={SearchIconStyle}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
    </svg>
  );
}

const ContainerStyle = css`
  position: relative;
`;

const SearchIconStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1%;
  z-index: 10;
`;

export default SearchInput;
