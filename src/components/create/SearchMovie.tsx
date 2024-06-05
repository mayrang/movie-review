"use client";
import Flex from "../shared/Flex";
import SearchField from "../shared/SearchField";
import SearchInput from "../shared/SearchInput";
import Spacing from "../shared/Spacing";
import Text from "../shared/Text";

export default function SearchMovie() {
  return (
    <Flex direction="column">
      <Text typo="large">어떤 영화의 리뷰인가요?</Text>
      <Spacing size="6" />
      <SearchField placeholder="영화 제목으로 검색하세요" />
    </Flex>
  );
}
