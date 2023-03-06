import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

import {
  ItemsListSection,
  ItemsListTitle,
  ItemsListArea,
  ItemsListGroup,
  ItemsBtnMore
} from "./style";

interface Props {
  data: Array<TypeItems>;
  title: string;
}

interface TypeItems {
  id: number;
  title: string;
  url: string;
}

const ItemsList = ({ title, data }: Props) => {
  const [count, setCount] = useState(1);
  const [maxCount, setMaxCount] = useState(0);

  const CheckDataLength = () => {
    let MAX = 0,
      count = 1;
    const length = data.length;
    const newData = [];

    if (length % 5 === 0) {
      MAX = length / 5;
    } else {
      MAX = Math.floor(length / 5) + 1;
    }

    setMaxCount(MAX);

    for (let i = 0; i < MAX; i++) {
      const copyData = [...data];
      newData.push(copyData.slice(i * 5, count * 5));
      count++;
    }
  };

  const handleBannerAdd = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    CheckDataLength();
  }, []);

  return (
    <ItemsListSection>
      <ItemsListTitle>{title}</ItemsListTitle>
      <ItemsListArea>
        <ItemsListGroup
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
        </ItemsListGroup>
      </ItemsListArea>

      {count !== maxCount && (
          <ItemsBtnMore onClick={handleBannerAdd}>
            <Icon size={10} color={color.grey} icon="arrowDown" />
            <span>더보기</span>
          </ItemsBtnMore>
        )}
    </ItemsListSection>
  );
};

export default ItemsList;
