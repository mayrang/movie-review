import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface FlexProps {
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  direction?: CSSProperties["flexDirection"];
}

const Flex = styled.div<FlexProps>(({ justify, align, direction }) => ({
  display: "flex",
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
}));

export default Flex;
