import { Link } from "react-router-dom";

import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

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
  return (
    <BannerListSection>
      <BannerListTitle>{title}</BannerListTitle>
      <BannerListArea>
        <BannerListGroup>
          {data.map((item: TypeBanner) => {
            const { id, title, img, url } = item;
            return (
              <li key={id}>
                <Link to={url}>
                  <img src={img} alt={title} />
                </Link>
              </li>
            );
          })}
        </BannerListGroup>
      </BannerListArea>
    </BannerListSection>
  );
};

export default BannerList;
