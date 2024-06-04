import { colors, Colors } from "@/styles/colorPallete";
import { typography, Typography } from "@/styles/typography";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

type TextProps = {
  bold?: boolean;
  typo: Typography;
  color?: Colors;
  display?: CSSProperties["display"];
  fontWeight?: CSSProperties["fontWeight"];
};

const Text = styled.span<TextProps>(
  ({
    bold = false,

    color = colors.defaultShades[900],
    display = "inline-block",
    fontWeight = "normal",
  }) => ({
    fontWeight: bold ? "bold" : fontWeight,
    color: color,
    display: display,
  }),
  ({ typo = "small" }) => typography[typo]
);

export default Text;
