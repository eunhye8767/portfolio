/**
 * https://react-icons.github.io/react-icons
 */

import { useEffect } from "react";
import useSelect from "playground/hooks/useSelect";
import useWindowClose from "playground/hooks/useWindowClose";

import { GoChevronDown } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import {
  SelectSection,
  SelectLabelGroup,
  SelectOptionGroup,
  SelectOptionList,
  SelectOptionButton,
  SelectOptionCheckbox,
  SelectCheckedTagGroup,
  SelectCheckedTagList,
  SelectCheckedTagItem,
} from "./style";

import { SelectProps } from "playground/playground";

interface SelectAddProps extends SelectProps {
  selectType: string;
  checkboxOption: string[];
}

const Select = ({
  initialLabel,
  selectType,
  buttonOption,
  checkboxOption,
}: SelectAddProps) => {
  const {
    currIdx,
    label,
    checkLabel,
    refSelect,
    isExpand,
    setIsExpand,
    isSelected,
    checkedList,
    clickLabel,
    clickOptionButton,
    changeOptionCheckbox,
    checkedOptionCheckbox,
    setIsSelected,
  } = useSelect({ initialLabel, buttonOption });

  const clickClose = useWindowClose({ refSelect, isExpand, setIsExpand });

  const focusButton = (evt: React.FocusEvent<HTMLButtonElement>) => {
    // 버튼 포커스 이벤트
    console.log(evt.relatedTarget);
  };

  useEffect(() => {
    window.addEventListener("click", clickClose);
    return () => {
      window.removeEventListener("click", clickClose);
    };
  }, []);

  useEffect(() => {
    checkedList.length === 0 ? setIsSelected(false) : setIsSelected(true);
  }, [checkedList]);

  return (
    <SelectSection
      ref={refSelect}
      className={checkLabel}
      $expand={isExpand}
      $selected={isSelected}
    >
      <SelectLabelGroup>
        <button type="button" className="label" onClick={clickLabel}>
          <span className="label__text">{label}</span>
          <span className="label__ico">
            <GoChevronDown />
          </span>
        </button>
      </SelectLabelGroup>
      <SelectOptionGroup>
        <SelectOptionList>
          {selectType === "button" &&
            buttonOption.map((opt, idx) => (
              <li key={opt + idx}>
                <SelectOptionButton
                  type="button"
                  className={currIdx === idx ? "is-selected" : ""}
                  onClick={() => clickOptionButton(idx)}
                  onFocus={focusButton}
                >
                  <span className="option__text">{opt}</span>
                  {currIdx === idx && (
                    <span className="option__checked">
                      <BsCheck />
                    </span>
                  )}
                </SelectOptionButton>
              </li>
            ))}

          {selectType === "checkbox" &&
            checkboxOption.map((item, idx) => (
              <li key={idx}>
                <SelectOptionCheckbox>
                  <input
                    type="checkbox"
                    name={`ck${idx}`}
                    id={`ck${idx}`}
                    checked={checkedList.includes(item)}
                    onChange={(e) => changeOptionCheckbox(e, item)}
                    value={item}
                  />
                  <label htmlFor={`ck${idx}`}>
                    <span className="checkbox__ico"></span>
                    <span className="checkbox__text">{item}</span>
                  </label>
                </SelectOptionCheckbox>
              </li>
            ))}
        </SelectOptionList>
      </SelectOptionGroup>
      {checkedList.length > 0 && (
        <SelectCheckedTagGroup>
          <SelectCheckedTagList>
            {checkedList.map((item, idx) => {
              return (
                <li key={idx}>
                  <SelectCheckedTagItem>
                    {item}
                    <button
                      type="button"
                      onClick={() => checkedOptionCheckbox(item, false)}
                    >
                      <span className="screenOut">삭제</span>
                      <AiFillCloseCircle />
                    </button>
                  </SelectCheckedTagItem>
                </li>
              );
            })}
          </SelectCheckedTagList>
        </SelectCheckedTagGroup>
      )}
    </SelectSection>
  );
};

Select.defaultProps = {
  buttonOption: [""],
  checkboxOption: [""],
};
export default Select;
