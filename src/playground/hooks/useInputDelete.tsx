const useInputDelete = (
  ref: React.MutableRefObject<HTMLInputElement | null>,
  setValue: React.Dispatch<React.SetStateAction<string>>
) => {
  const clickDelete = () => {
    if (ref.current) {
      setValue("");
      ref.current.focus();
    }
  };

  return clickDelete;
};

export default useInputDelete;
