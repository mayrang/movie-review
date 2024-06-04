"use client";
import { useLayoutEffect, useState } from "react";
import DownloadJava from "./DownloadJava";
import { css } from "@emotion/react";
import checkJava from "@/utils/checkJava";
import NextLink from "./NextLink";
import Text from "../shared/Text";

export default function GuideStep() {
  const [step, setStep] = useState<0 | 1>(1);
  const [isMobile, setMobile] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth < 700) {
      setMobile(true);
    }
  }, []);

  const handleNext = async () => {
    try {
      console.log("check");
      const data = await checkJava();
      console.log("data", data);
      setStep(1);
    } catch (err) {
      console.log(err);
      alert("자바 클래스 파일을 확인할 수 없습니다. 다시 한번 확인해주세요.");
      return;
    }
  };

  return isMobile ? (
    <Text typo="large">해당 서비스는 pc 환경에서만 사용이 가능해요.</Text>
  ) : (
    <div>
      {step === 0 && <DownloadJava onNext={handleNext} />}
      {step === 1 && <NextLink />}
    </div>
  );
}
