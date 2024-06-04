import { css } from "@emotion/react";
import { typography } from "./typography";
import { rounded } from "./rounded";
import { colors } from "./colorPallete";

export const buttonSize = {
  small: css`
    ${typography.small}
    padding: 6px 8px;
    ${rounded.medium}
  `,
  medium: css`
    ${typography.medium}
    padding: 8px 10px;
    ${rounded.medium}
  `,
  large: css`
    ${typography.large}
    padding: 12px 14px;
    ${rounded.medium}
  `,
};

export const buttonColor = {
  primary: css`
    background-color: ${colors.base.primary};
    color: ${colors.layout.foreground};
  `,
  secondary: css`
    background-color: ${colors.base.secondary};
    color: ${colors.layout.foreground};
  `,
  success: css`
    background-color: ${colors.base.success};
    color: ${colors.layout.foreground};
  `,
  warning: css`
    background-color: ${colors.base.warning};
    color: ${colors.layout.foreground};
  `,
  danger: css`
    background-color: ${colors.base.danger};
    color: ${colors.layout.foreground};
  `,
  default: css`
    background-color: ${colors.base.default};
    color: ${colors.layout.foreground};
  `,
};

export const buttonGhostColor = {
  primary: css`
    color: ${colors.base.primary};
    border: 1px solid ${colors.base.primary};
  `,
  secondary: css`
    color: ${colors.base.secondary};
    border: 1px solid ${colors.layout.foreground};
  `,
  success: css`
    color: ${colors.base.success};
    border: 1px solid ${colors.layout.foreground};
  `,
  warning: css`
    color: ${colors.base.warning};
    border: 1px solid ${colors.layout.foreground};
  `,
  danger: css`
    color: ${colors.base.danger};
    border: 1px solid ${colors.layout.foreground};
  `,
  default: css`
    color: ${colors.base.default};
    border: 1px solid ${colors.layout.foreground};
  `,
};

export type ButtonSize = keyof typeof buttonSize;

export type ButtonColor = keyof typeof buttonColor;
