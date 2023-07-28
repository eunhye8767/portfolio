import { GuideSection, GuideTitle, GuideList } from "playground/GuideStyle";
import InputText from "playground/components/InputText";

const InputTextPage = () => {
  return (
    <GuideSection>
      <GuideTitle>Input Text</GuideTitle>
      <GuideList>
        <li>
          <InputText
            label="입력해주세요"
            placeholder="입력해주세요"
            initialValue=""
            maxLength={10}
          />
        </li>
      </GuideList>
    </GuideSection>
  );
};

export default InputTextPage;
