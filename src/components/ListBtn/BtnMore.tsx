import React from "react";

import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

import { PaginationMoreSection, PaginationMoreButton } from "./style";

interface ButtonProps {
  onMoreBtn: React.MouseEventHandler<HTMLButtonElement>;
}

const BtnMore = ({onMoreBtn} :ButtonProps) => {
  return (
    <PaginationMoreSection>
      <PaginationMoreButton onClick={onMoreBtn}>
        <Icon size={10} color={color.grey} icon="arrowDown" />
        <span>더보기</span>
      </PaginationMoreButton>
    </PaginationMoreSection>
  );
};

export default BtnMore;
