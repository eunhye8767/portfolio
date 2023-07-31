/**
 * https://react-icons.github.io/react-icons
 */

import useFocus from "playground/hooks/useFocus";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface PwTypeProps {
  type: string;
  visible: boolean;
}

const useInputView = (
  pwType: PwTypeProps,
  setPwType: React.Dispatch<React.SetStateAction<PwTypeProps>>
) => {
  const { onFocus, onBlur } = useFocus();

  const clickView = () => {
    pwType.visible
      ? setPwType({
          type: "password",
          visible: false,
        })
      : setPwType({
          type: "text",
          visible: true,
        });
  };

  return (
    <button
      type="button"
      className="btn-delete"
      onClick={clickView}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {pwType.visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      <span className="screen-out">
        {pwType.visible ? "비밀번호 보기" : "비밀번호 숨기기"}
      </span>
    </button>
  );
};

export default useInputView;
