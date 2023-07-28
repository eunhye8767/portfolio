import { useEffect, useState } from "react";
import { Props } from "Assets/CommonType";

import { ListSection, ListTitle } from "./style";

import ListMore from "./ListMore";
import ListPagination from "./ListPagination";
import BtnMore from "components/ListBtn/BtnMore";
import BtnPagination from "components/ListBtn/BtnPagination";

interface PropsList extends Props {
  more: boolean;
}

const List = ({ title, data, more }: PropsList) => {
  const dataTotal = data.length;
  const dataCount = more ? 4 : 5;

  const [newData, setNewData] = useState<any>([]);
  const [countNumber, setCountNumber] = useState<number>(1);
  const [maxNumber, setMaxNumber] = useState<number>(0);

  const checkMaxNumber = () => {
    dataTotal % dataCount === 0
      ? setMaxNumber(dataTotal / dataCount)
      : setMaxNumber(Math.floor(dataTotal / dataCount) + 1);
  };

  const checkNewData = () => {
    let count = 1;
    const arrData = [];

    for (let i = 0; i < maxNumber; i++) {
      const copyData = [...data].reverse();
      arrData.push(copyData.slice(i * dataCount, count * dataCount));
      if (count <= maxNumber) count++;
    }

    setNewData(arrData);
    setCountNumber(0);
  };

  const handleMoreBtn = () => {
    if (countNumber < maxNumber) setCountNumber((prev) => prev + 1);
  };

  const handlePaginationPrev = () => {
    if (0 < countNumber) setCountNumber((prev) => prev - 1);
  };

  const handlePaginationNext = () => {
    if (countNumber < maxNumber - 1) setCountNumber((prev) => prev + 1);
  };

  useEffect(() => {
    checkMaxNumber();
  }, []);

  useEffect(() => {
    if (!more) checkNewData();
  }, [maxNumber]);

  return (
    <ListSection
      className={
        (more
          ? ""
          : countNumber === 0
          ? "is-disabled-prev"
          : countNumber === maxNumber - 1
          ? "is-disabled-next"
          : "") + (countNumber + 1 === maxNumber ? " is-disabled-next" : "")
      }
    >
      <ListTitle>{title}</ListTitle>

      {more ? (
        <>
          <ListMore
            data={data}
            dataCount={dataCount}
            countNumber={countNumber}
          />
          {countNumber < maxNumber && <BtnMore onMoreBtn={handleMoreBtn} />}
        </>
      ) : (
        <>
          <ListPagination
            data={newData[countNumber]}
            dataCount={dataCount}
            countNumber={countNumber}
            maxNumber={maxNumber}
          />
          <BtnPagination
            onPaginationPrev={handlePaginationPrev}
            onPaginationNext={handlePaginationNext}
            countNumber={countNumber}
            maxNumber={maxNumber}
          />
        </>
      )}
    </ListSection>
  );
};

export default List;
