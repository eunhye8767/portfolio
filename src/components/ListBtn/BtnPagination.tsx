import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

import {
  PaginationBtnGroup,
  PaginationItemGroup,
  PaginationBtnItem,
  PaginationItemNumber,
} from "./style";

interface Props {
  onPaginationPrev: React.MouseEventHandler<HTMLButtonElement>;
  onPaginationNext: React.MouseEventHandler<HTMLButtonElement>;
  countNumber: number;
  maxNumber: number;
}

const BtnPagination = ({
  onPaginationPrev,
  onPaginationNext,
  countNumber,
  maxNumber,
}: Props) => {
  return (
    <PaginationBtnGroup>
      <PaginationItemGroup>
        <PaginationBtnItem className="prev" onClick={onPaginationPrev}>
          <span className="ico">
            <Icon size={16} color={color.black} icon="arrowDown" />
          </span>
          <span className="txt">prev</span>
        </PaginationBtnItem>
      </PaginationItemGroup>
      <PaginationItemGroup>
        <PaginationItemNumber>
          <span>{countNumber + 1}</span>
          <span className="total">{maxNumber}</span>
        </PaginationItemNumber>
      </PaginationItemGroup>
      <PaginationItemGroup>
        <PaginationBtnItem className="next" onClick={onPaginationNext}>
          <span className="txt">next</span>
          <span className="ico">
            <Icon size={16} color={color.black} icon="arrowDown" />
          </span>
        </PaginationBtnItem>
      </PaginationItemGroup>
    </PaginationBtnGroup>
  );
};

export default BtnPagination;
