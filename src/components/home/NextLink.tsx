import Link from "next/link";
import Flex from "../shared/Flex";
import Text from "../shared/Text";
import Spacing from "../shared/Spacing";
import { css, keyframes } from "@emotion/react";
import { colors } from "@/styles/colorPallete";

export default function NextLink() {
  return (
    <Flex css={ContainerStyle} direction="column" align="center">
      <Text typo="medium">등록된 리뷰들을 확인해보세요!</Text>
      <Spacing size="3" />

      <Link href="/reviews" css={LinkStyle}>
        리뷰 목록으로 보기
        <RightArrowIcon />
      </Link>
      <Spacing size="2" />
      <Link href="/moview" css={LinkStyle}>
        영화 목록으로 보기
        <RightArrowIcon />
      </Link>
    </Flex>
  );
}

function RightArrowIcon() {
  return (
    <svg
      css={IconStyle}
      enableBackground="new 0 0 32 32"
      height="18px"
      version="1.1"
      viewBox="0 0 32 32"
      width="18px"
    >
      <g>
        <polyline
          fill="none"
          points="   649,137.999 675,137.999 675,155.999 661,155.999  "
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <polyline
          fill="none"
          points="   653,155.999 649,155.999 649,141.999  "
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <polyline
          fill="none"
          points="   661,156 653,162 653,156  "
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
      <g>
        <g>
          <path d="M2.982,17h26.035c0.397,0,0.756-0.244,0.908-0.617c0.152-0.374,0.068-0.804-0.213-1.09l-11.789-12    c-0.384-0.391-1.005-0.391-1.389,0s-0.384,1.023,0,1.414L26.646,15H2.982C2.439,15,2,15.448,2,16S2.439,17,2.982,17z" />
        </g>
        <g>
          <path d="M17.228,29c0.251,0,0.503-0.098,0.695-0.293l7.86-8c0.384-0.391,0.384-1.023,0-1.414s-1.005-0.391-1.389,0l-7.86,8    c-0.384,0.391-0.384,1.023,0,1.414C16.725,28.902,16.977,29,17.228,29z" />
        </g>
      </g>
    </svg>
  );
}

const IconStyle = css`
  fill: ${colors.primaryShades[600]};
  & > polyline {
    stroke: ${colors.primaryShades[600]};
  }
`;

const LinkStyle = css`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${colors.primaryShades[600]};
  &:hover {
    color: ${colors.primaryShades[700]};
    & svg {
      fill: ${colors.primaryShades[700]};
    }
    & polyline {
      stroke: ${colors.primaryShades[700]};
    }
  }
`;

const animation = keyframes`
 0% {
  transform: translateY(100%);
  opacity: 0;
 }

 100% {

 }
`;

const ContainerStyle = css`
  & > a,
  span {
    animation: ${animation} 0.5s ease-in-out forwards;
  }
`;
