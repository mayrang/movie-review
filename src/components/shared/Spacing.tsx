import styled from "@emotion/styled";

interface SpacingProps {
  size: keyof typeof spacingSize;
  direction?: "horizontal" | "vertical";
}

const Spacing = styled.div<SpacingProps>`
  ${({ size, direction = "vertical" }) => `
    ${
      direction === "vertical"
        ? `height: ${spacingSize[size]}`
        : `width: ${spacingSize[size]}`
    }
  `}
`;

export default Spacing;

const spacingSize = {
  "0": "0px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "3.5": "14px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
  "9": "36px",
  "10": "40px",
  "11": "44px",
  "12": "48px",
  "13": "52px",
  "14": "56px",
  "15": "60px",
  "16": "64px",
  "17": "68px",
  "18": "72px",
  "20": "80px",
  "24": "96px",
  "28": "112px",
  "32": "128px",
  "36": "144px",
  "40": "160px",
  "44": "176px",
  "48": "192px",
  "52": "208px",
  "56": "224px",
  "60": "240px",
  "64": "256px",
  "72": "288px",
  "80": "320px",
  "96": "384px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "22px",
  xl: "36px",
  "2xl": "48px",
  "3xl": "80px",
  "4xl": "120px",
  "5xl": "224px",
  "6xl": "288px",
  "7xl": "384px",
  "8xl": "512px",
  "9xl": "640px",
} as const;
