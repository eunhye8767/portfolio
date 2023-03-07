import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Props, TypeItems } from "Assets/CommonType";

import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

import {
  BannerListSection,
  BannerListArea,
  BannerListGroup,
  BannerListTitle,
  BannerBtnMore,
} from "./style";

import Pagination from "components/ListBtn"

const BannerList = ({ title, data }: Props) => {
  const [count, setCount] = useState(1);
  const [maxCount, setMaxCount] = useState(0);

  const CheckDataLength = () => {
    let MAX = 0,
      count = 1;
    const length = data.length;
    const newData = [];

    if (length % 4 === 0) {
      MAX = length / 4;
    } else {
      MAX = Math.floor(length / 4) + 1;
    }

    setMaxCount(MAX);

    for (let i = 0; i < MAX; i++) {
      const copyData = [...data];
      newData.push(copyData.slice(i * 4, count * 4));
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
    <BannerListSection>
      <BannerListTitle>{title}</BannerListTitle>
      <BannerListArea>
        <BannerListGroup>
          {data.map((item: TypeItems, idx: number) => {
            const { id, title, img, url } = item;
            if (4 * count <= idx) return false;
            return (
              <li key={id}>
                <Link to={url}>
                  <img src={img} alt={title} />
                </Link>
              </li>
            );
          })}
        </BannerListGroup>

        {count !== maxCount && (
          <BannerBtnMore onClick={handleBannerAdd}>
            <Icon size={10} color={color.grey} icon="arrowDown" />
            <span>더보기</span>
          </BannerBtnMore>
        )}

        <Pagination data={data} type="more" />
      </BannerListArea>
    </BannerListSection>
  );
};

export default BannerList;
