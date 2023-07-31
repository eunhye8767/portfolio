import InputPassword from "playground/components/InputPassword";

import { GuideSection, GuideTitle, GuideList, GuideDesc } from "playground/GuideStyle";

const InputPasswordPage = () => {
  return (
    <GuideSection>
      <GuideTitle>Input Password (test ID : abcd)</GuideTitle>
      <GuideDesc>
        <p>
          비밀번호 8자리 ~ 15자리 <br />
          숫자 포함 <br />
          영문 대/소문자 포함
          <br />
          특수문자 : !@#$%^*+=- 포함 (단, 3개 이상 사용 불가)
          <br />
          공백 X<br />
          같은 문자 3번 반복 X <br />
          아이디 포함 X <br />
          한글 X
        </p>
      </GuideDesc>
      <GuideList>
        <li>
          <InputPassword
            label="비밀번호 입력하세요"
            placeholder="영문, 숫자, 특수문자 포함 8~15자"
            initialValue=""
          />
        </li>
      </GuideList>
    </GuideSection>
  );
};

export default InputPasswordPage;
