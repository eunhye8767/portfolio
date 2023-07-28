import InputEmail from "playground/components/InputEmail";

import { GuideSection, GuideTitle, GuideList } from "playground/GuideStyle";

const InputEmailPage = () => {
  return (
    <GuideSection>
      <GuideTitle>Input Email</GuideTitle>
      <GuideList>
        <li>
          <InputEmail
            label="이메일"
            placeholder="email@dot.com"
            initialValue=""
          />
        </li>
      </GuideList>
    </GuideSection>
  );
};

export default InputEmailPage;
