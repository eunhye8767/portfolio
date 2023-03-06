import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Props, TypeItems } from "Assets/CommonType";

import {
  ItemsListSection,
  ItemsListTitle,
  ItemsListArea,
  ItemsListGroup,
} from "./style";


import Pagination from "components/Pagination"

const ItemsList = ({ title, data }: Props) => {
  
  // const [count, setCount] = useState(1);
  // const [maxCount, setMaxCount] = useState(0);

  // const CheckDataLength = () => {
  //   let MAX = 0,
  //     count = 1;
  //   const length = data.length;
  //   const newData = [];

  //   if (length % 5 === 0) {
  //     MAX = length / 5;
  //   } else {
  //     MAX = Math.floor(length / 5) + 1;
  //   }

  //   setMaxCount(MAX);

  //   for (let i = 0; i < MAX; i++) {
  //     const copyData = [...data];
  //     newData.push(copyData.slice(i * 5, count * 5));
  //     count++;
  //   }
  // };

  // const handleBannerAdd = () => {
  //   setCount((prev) => prev + 1);
  // };

  // useEffect(() => {
  //   CheckDataLength();
  // }, []);

  return (
    <ItemsListSection>
      <ItemsListTitle>{title}</ItemsListTitle>
      <ItemsListArea>
        {/* <ItemsListGroup
          className={count === maxCount ? "is-not-more" : "is-more"}
        >
          {data.map((item: TypeItems, idx: number) => {
            const { id, title, url } = item;
            if (5 * count <= idx) return false;
            return (
              <li key={id}>
                <Link to={url} target="_blank">
                  <p className="date">No. {id}</p>
                  <p className="tit">
                    <span>{title}</span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ItemsListGroup> */}
      </ItemsListArea>
      <Pagination data={data} type="pagi" />
      {/* {count !== maxCount && <Pagination />} */}
    </ItemsListSection>
  );
};

export default ItemsList;
