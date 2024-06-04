// pages/index.js
"use client";
import GuideStep from "@/components/home/GuideStep";
import Spacing from "@/components/shared/Spacing";
import Text from "@/components/shared/Text";
import { css } from "@emotion/react";

export default function Home() {
  return (
    <div css={ContainerStyle}>
      <div css={CenterStyle}>
        <h1 style={{ fontSize: 28, fontWeight: "bold" }}>영화리뷰 DB</h1>
        <Spacing size="8" />
        <GuideStep />
      </div>
    </div>
  );
}

const ContainerStyle = css`
  position: fixed;
  color: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/background-image.jpg");
`;

const CenterStyle = css`
  position: absolute;
  text-align: center;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;
