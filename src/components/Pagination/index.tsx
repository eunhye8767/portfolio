import React, { useEffect, useState } from "react";

interface Props {
  data: Array<TypeItems>;
}

interface TypeItems {
  id: number;
  title: string;
  url: string;
}

const Pagination = ({ data }: Props) => {
  const fix = { total: data.length, count: 5 };
  const [newData, setNewData] = useState<any | TypeItems>([]);
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

    setNewData(arrData)
  };

  useEffect(() => {
    changeNumber();
  }, []);

  useEffect(() => {
    handleNewData();
  }, [numMax])

  useEffect(() => {
    console.log(newData);
    
  }, [newData])

  return <div>Pagination</div>;
};

export default Pagination;
