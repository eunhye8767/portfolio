import { useEffect, useState } from "react";
import { Props, TypeItems } from "Assets/CommonType";

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
      const copyData = [...data];
      arrData.push(copyData.slice(i * dataCount, count * dataCount));
      if (count <= maxNumber) count++;
    }

    setNewData(arrData);
  };

  const handleMoreBtn = () => {
    if (countNumber < maxNumber) setCountNumber((prev) => prev + 1);
    if (countNumber < maxNumber) console.log("zz");
  };

  useEffect(() => {
    checkMaxNumber();
  }, []);

  useEffect(() => {
    if (!more) checkNewData();
  }, [maxNumber]);

  // useEffect(() => {
  //   console.log(countNumber, maxNumber);

  // }, [countNumber]);

  // useEffect(() => {
  //   console.log(title, newData);
  // }, [newData]);

  return (
    <ListSection
      className={more ? "" : countNumber < maxNumber ? "is-more" : ""}
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
          <ListPagination />
          <BtnPagination />
        </>
      )}
    </ListSection>
  );
};

export default List;
