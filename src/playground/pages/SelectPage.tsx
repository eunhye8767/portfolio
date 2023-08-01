import { GuideSection, GuideTitle, GuideList } from "playground/GuideStyle";
import Select from "playground/components/Select";

const InputEmailPage = () => {
  return (
    <GuideSection>
      <GuideTitle>Select Box</GuideTitle>
      <GuideList>
        <li>
          <Select />
        </li>
      </GuideList>
    </GuideSection>
  );
};

export default InputEmailPage;
