import { FormMsgGroup } from "./style";

import { ValidProps } from "playground/playground";

const FormMsg = ({ valid }: ValidProps) => {
  return (
    <FormMsgGroup $valid={valid}>
      <p>{valid.msg}</p>
    </FormMsgGroup>
  );
};

export default FormMsg;
