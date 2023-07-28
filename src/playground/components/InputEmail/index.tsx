import { InputSection, InputGroup } from "playground/components/styles/input";

import { InputProps } from "playground/playground";
const InputEmail = ({ label, placeholder, initialValue }: InputProps) => {
  return (
    <InputSection>
        <InputGroup
          // $focus={focus}
          // $valid={valid}
          // $value={valueNum.length > 0 ? true : false}
        >
          <label className="screen-out">{label}</label>

          {/* <input
            ref={refInput}
            type="tel"
            value={valueNum}
            placeholder={placeholder}
            onChange={handleAutoHyphen}
            onKeyUp={onKeyEvt}
            onFocus={onFocus}
            onBlur={onFocusOut}
          /> */}

          {/* {valueNum.length > 0 && clickDelete} */}
        </InputGroup>

        {/* {(valid.error || valid.success) && <FormMsg valid={valid} />} */}
      </InputSection>
  )
}

export default InputEmail