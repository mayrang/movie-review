import { css } from "@emotion/react";

export const typography = {
  tiny: css`
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  small: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  medium: css`
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  large: css`
    font-size: 1.125rem;
    line-height: 1.75rem;
  `,
};

export type Typography = keyof typeof typography;
