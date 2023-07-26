import Input from "playground/components/Input";

const PageInput = () => {
  return (
    <ul>
      <li>
        <Input
          label="제목"
          placeholder="20자 이내"
          initialValue=""
          typeNumber={0}
          maxLength={20}
        />
      </li>
      <li>
        <Input
          label="제목"
          placeholder="10자 이내"
          initialValue="초기"
          typeNumber={0}
          maxLength={10}
        />
      </li>
      <li>
        <Input
          label="제목"
          placeholder="숫자만"
          initialValue=""
          typeNumber={1}
          maxLength={13}
        />
      </li>
    </ul>
  );
};

export default PageInput;
