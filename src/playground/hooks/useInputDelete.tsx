/**
 * https://react-icons.github.io/react-icons
 */
import { RiCloseCircleLine } from "react-icons/ri";
import useFocus from "playground/hooks/useFocus";

const useInputDelete = (
  ref: React.MutableRefObject<HTMLInputElement | null>,
  setValue: React.Dispatch<React.SetStateAction<string>>
) => {
  const { onFocus, onBlur } = useFocus();

  const clickDelete = () => {
    if (ref.current) {
      setValue("");
      ref.current.focus();
    }
  };

  return (
    <button
      type="button"
      className="btn-delete"
      onClick={clickDelete}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <RiCloseCircleLine />
      <span className="screen-out">삭제</span>
    </button>
  );
};

export default useInputDelete;
