import { GuideSection, GuideTitle, GuideList } from "playground/GuideStyle";
import Select from "playground/components/Select";

const buttonOption = [
  "버튼형 옵션 0 입니다",
  "버튼형 옵션 1 입니다? 하하",
  "버튼형 옵션 2",
  "버튼형 옵션 333",
  "버튼형 옵션 42",
  "버튼형 옵션 555 인데요? ㅋㅋ",
];
const checkboxOption = [
  "체크항목 1번",
  "체크항목 2번이겠죠",
  "체크항목 3번 일까?",
  "체크항목 4번 하하",
  "체크 5번ㅋㅋㅋ",
];

const InputEmailPage = () => {
  return (
    <GuideSection>
      <GuideTitle>Select Box</GuideTitle>
      <GuideList>
        <li>
          <Select
            initialLabel="옵션을 선택해주세요"
            selectType="button"
            buttonOption={buttonOption}
          />
        </li>
        <li>
          <Select
            initialLabel="체크박스를 선택해주세요"
            selectType="checkbox"
            checkboxOption={checkboxOption}
          />
        </li>
      </GuideList>
    </GuideSection>
  );
};

export default InputEmailPage;
