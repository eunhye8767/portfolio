import { ButtonProps } from "Assets/CommonType";

import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

import { MoreBtnGroup, MoreBtnItem } from "./style";

const BtnMore = ({ onMoreBtn }: ButtonProps) => {
  return (
    <MoreBtnGroup>
      <MoreBtnItem onClick={onMoreBtn}>
        <Icon size={10} color={color.grey} icon="arrowDown" />
        <span>더보기</span>
      </MoreBtnItem>
    </MoreBtnGroup>
  );
};

export default BtnMore;
