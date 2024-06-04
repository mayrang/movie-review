"use client";

import Button from "../shared/Button";
import Text from "../shared/Text";
import Flex from "../shared/Flex";
import Spacing from "../shared/Spacing";
import { css, keyframes } from "@emotion/react";
import { useState } from "react";

export default function DownloadJava({
  onNext,
}: {
  onNext: () => Promise<void>;
}) {
  const [showNext, setShowNext] = useState(false);
  const handleDownload = () => {
    // public 폴더에 있는 파일의 경로
    const filePath = "/JavaProgram.class";
    // 파일 다운로드를 트리거하는 링크를 생성하고 클릭
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "JavaProgram.class"; // 저장할 때 파일 이름 설정
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowNext(true);
  };
  return (
    <Flex css={ContainerStyle} direction="column">
      <Text typo="medium">이용을 위해선 자바 파일을 다운받아야 합니다.</Text>
      <Text typo="medium">
        클래스 파일을 다운로드하고 바탕화면에 JavaProgram 이름으로 저장해주세요.
      </Text>
      <Spacing size="3" />
      <div>
        <Button onClick={handleDownload}>다운로드</Button>
      </div>
      <div style={{ display: showNext ? "block" : "none" }}>
        <Spacing size="3" />
        <Text typo="small">바탕화면에 저장하셨다면 다음을 눌러주세요.</Text>
        <div style={{ display: showNext ? "block" : "none" }}>
          <Button
            onClick={onNext}
            style={{ border: "none" }}
            size="medium"
            ghost
          >
            다음
          </Button>
        </div>
      </div>
    </Flex>
  );
}

const animation = keyframes`
 0% {
  transform: translateY(100%);
  opacity: 0;
 }

 100% {

 }
`;

const ContainerStyle = css`
  & > span,
  div {
    animation: ${animation} 0.5s ease-in-out forwards;
  }
`;
