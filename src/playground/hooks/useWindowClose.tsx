interface Props {
  refSelect: React.RefObject<HTMLSelectElement>;
  isExpand: boolean;
  setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const useWindowClose = ({ refSelect, isExpand, setIsExpand }: Props) => {
  const clickClose = (evt: MouseEvent) => {
    const { target } = evt;
    const elem = target as HTMLElement;

    if (!isExpand && refSelect.current && !refSelect.current.contains(elem)) {
      setIsExpand(false);
    }
  };

  return clickClose;
};

export default useWindowClose;
