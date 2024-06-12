import { css } from "@emotion/react";
import React from "react";
import Flex from "./Flex";
import Text from "./Text";

interface TextRowProps {
  left?: React.ReactNode;
  content: React.ReactNode;
  right?: React.ReactNode;
  withArrow: boolean;
  as?: "li" | "div";
  onClick?: () => void;
}

export default function ListRow({
  left,
  as = "li",
  content,
  right,
  withArrow,
  onClick,
}: TextRowProps) {
  return (
    <Flex onClick={onClick} align="center" as={as} css={TextRowContainerStyle}>
      <Flex css={TextRowLeftStyle}>{left}</Flex>
      <Flex css={TextRowContentStyle}>{content}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <ArrowIcon /> : null}
    </Flex>
  );
}

const TextRowLeftStyle = css`
  margin-right: 16px;
`;

const TextRowContentStyle = css`
  flex: 1;
`;

const TextRowContainerStyle = css`
  padding: 8px 24px;
`;

function TextRowContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Flex direction="column">
      <Text typo="medium" style={{ marginBottom: 6 }} bold>
        {title}
      </Text>
      <Text typo="medium">{description}</Text>
    </Flex>
  );
}

ListRow.Content = TextRowContent;

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 96 96"
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
    </svg>
  );
}
