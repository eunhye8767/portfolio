import { FormMsgGroup } from "./style";

import { ValidProps } from "playground/playground";

const FormMsg = ({ valid }: ValidProps) => {
  return (
    <FormMsgGroup $valid={valid}>
      <p>{valid.error && "에러 발생"}</p>
      <p>{valid.success && "성공"}</p>
    </FormMsgGroup>
  );
};

export default FormMsg;
