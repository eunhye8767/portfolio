import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  BannerListSection,
  BannerListArea,
  BannerListGroup,
  BannerListTitle,
} from "./style";

interface Props {
  data: Array<TypeBanner>;
  title: string;
}

interface TypeBanner {
  id: number;
  title: string;
  img: string;
  url: string;
}

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
          {data.map((item: TypeBanner, idx: number) => {
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
          <button onClick={handleBannerAdd}>더보기</button>
        )}
      </BannerListArea>
    </BannerListSection>
  );
};

export default BannerList;
