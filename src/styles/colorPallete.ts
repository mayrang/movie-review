import { css } from "@emotion/react";

export const colorPalette = css`
  :root {
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
    --white: #fff;
    --black: #212121;
    --gray: #acacac;
    --light-gray: #ebe3e3;
  }
`;
export const colors = {
  red: "var(--red)",
  blue: "var(--blue)",
  green: "var(--green)",
  white: "var(--white)",
  black: "var(--black)",
  gray: "var(--gray)",
  lightGray: "var(--light-gray)",
};

export type Colors = keyof typeof colors;
