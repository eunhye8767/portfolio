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
        <li>
          {/* <InputTel
              label="전화번호 입력해주세요"
              placeholder="전화번호 입력해주세요"
              initialValue="010-2990-8767"
            /> */}
        </li>
      </GuideList>
    </GuideSection>
  );
};

export default InputTextPage;
