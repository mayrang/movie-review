import { css } from "@emotion/react";

export const rounded = {
  small: css`
    border-radius: 8px;
  `,
  medium: css`
    border-radius: 12px;
  `,
  large: css`
    border-radius: 14px;
  `,
  full: css`
    border-radius: 50%;
  `,
};

export type Rounded = keyof typeof rounded;
