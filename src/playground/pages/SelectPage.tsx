import { GuideSection, GuideTitle, GuideList } from "playground/GuideStyle";
import Select from "playground/components/Select";

const buttonOption = ["버튼형 옵션 0 입니다", "버튼형 옵션 1 입니다? 하하"];
const checkboxOption = ["체크항목 1번일까요? ㅋㅋ", "체크항목 2번 이죠"];

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
