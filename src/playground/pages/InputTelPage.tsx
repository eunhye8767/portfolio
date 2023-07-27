import InputTel from "playground/components/InputTel";

import { GuideSection, GuideTitle, GuideList } from "playground/GuideStyle";

const InputTelPage = () => {
  return (
    <>
      <GuideSection>
        <GuideTitle>Input Tel</GuideTitle>
        <GuideList>
          <li>
            <InputTel
              label="전화번호 입력해주세요"
              placeholder="전화번호 입력해주세요"
              initialValue=""
            />
          </li>
          <li>
            <InputTel
              label="전화번호 입력해주세요"
              placeholder="전화번호 입력해주세요"
              initialValue="010-2990-8767"
            />
          </li>
        </GuideList>
      </GuideSection>
    </>
  );
};

export default InputTelPage;
