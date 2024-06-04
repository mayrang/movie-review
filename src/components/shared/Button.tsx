import {
  ButtonColor,
  buttonColor,
  buttonGhostColor,
  ButtonSize,
  buttonSize,
} from "@/styles/butotnMap";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Flex from "./Flex";

type ButtonProps = {
  color?: ButtonColor;
  ghost?: boolean;

  size?: ButtonSize;
  disabled?: boolean;
  full?: boolean;
};

const BasicButton = styled.button<ButtonProps>(
  ({ size = "medium" }) => buttonSize[size],
  ({ ghost, color = "primary" }) =>
    ghost ? buttonGhostColor[color] : buttonColor[color],
  ({ disabled = false }) => (disabled ? { opacity: 0.26 } : null),
  ({ full = false }) => (full ? { width: "100%", borderRadius: 0 } : null),
  { cursor: "pointer" }
);

function ButtoWithIcon({ children }: { children: React.ReactNode }) {
  return <Flex css={ButtonWithIconContainerStyle}>{children}</Flex>;
}

const Button = BasicButton as typeof BasicButton & {
  WithIcon: typeof ButtoWithIcon;
};

const ButtonWithIconContainerStyle = css`
  gap: 12px;
`;

export default Button;
