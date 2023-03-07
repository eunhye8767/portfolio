import { ButtonProps } from "Assets/CommonType";

import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

import { PaginationMoreSection, PaginationMoreButton } from "./style";

const BtnPagination = ({ onPaginationPrev, onPaginationNext }: ButtonProps) => {
  return (
    <div>
      <button onClick={onPaginationPrev}>prev</button>
      <button onClick={onPaginationNext}>next</button>
    </div>
  );
};

export default BtnPagination;
