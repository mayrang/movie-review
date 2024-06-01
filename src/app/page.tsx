// pages/index.js
"use client";
import { css } from "@emotion/react";
import { useState } from "react";
import chargeSample from "../../public/java/JavaProgram";
export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const runJavaProgram = async () => {
    const response = await fetch("/api/java", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });
    console.log(response);

    const data = await response.json();
    console.log("data", data);
    setOutput(data.output);
  };

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
  };

  return (
    <div css={ContainerStyle}>
      <button onClick={handleDownload}>Download File</button>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter input for Java program" />
      <button onClick={runJavaProgram}>Run</button>
      <pre>{output}</pre>
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
