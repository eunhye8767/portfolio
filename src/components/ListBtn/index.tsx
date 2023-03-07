import React, { useEffect, useState } from "react";
import { Props, TypeItems } from "Assets/CommonType";

import BtnMore from "./BtnMore";
import BtnPagination from "./TypePagi";

interface PropsPagi extends Props {
  type: string;
}

const Pagination = ({ data, type }: PropsPagi) => {
  const fix = { total: data.length, count: 5 };
  const [newData, setNewData] = useState<any>([]);
  const [numCount, setNumCount] = useState(1);
  const [numMax, setNumMax] = useState(0);

  const changeNumber = () => {
    fix.total % fix.count === 0
      ? setNumMax(fix.total / fix.count)
      : setNumMax(Math.floor(fix.total / fix.count) + 1);
  };

  const handleNewData = () => {
    let count = 1;
    const arrData = [];

    for (let i = 0; i < numMax; i++) {
      const copyData = [...data];
      arrData.push(copyData.slice(i * fix.count, count * fix.count));
      if (count <= numMax) count++;
    }

    setNewData(arrData);
  };

  const handleMoreBtn = () => {
    setNumCount((prev) => prev + 1);
    console.log("zzz");
  };

  useEffect(() => {
    changeNumber();
  }, []);

  useEffect(() => {
    handleNewData();
  }, [numMax]);

  useEffect(() => {
    console.log(newData);
  }, [newData]);

  return (
    <>
      {type === "more" && <BtnMore onMoreBtn={handleMoreBtn} />}
      {type === "pagi" && <BtnPagination />}
    </>
  );
};

export default Pagination;
