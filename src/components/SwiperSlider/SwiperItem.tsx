import { Link } from "react-router-dom";

import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

import {
  SwiperSlideItem,
  SlideItemFigure,
  SlideItemConts,
  SlideItemType,
  SlideItemTitle,
  SlideItemDesc,
  SlideItemUrl,
} from "./style";

interface Props {
  title: string;
  img: string;
  type: string[];
  desc: string;
  url: string;
  ia: string;
}

const SwiperItem = ({ title, img, type, desc, url, ia }: Props) => {
  const renderItemLink = (n: number) => {
    return (
      <Link to={n === 0 ? ia : url} target="_blank">
        <Icon size={16} color={color.lightGrey} icon="link" />
        <span>{n === 0 ? "화면목록(IA)" : "Web Site"}</span>
      </Link>
    );
  };

  return (
    <SwiperSlideItem>
      <SlideItemFigure>
        <img src={img} alt={title} />
        <figcaption>{title}</figcaption>
      </SlideItemFigure>

      <SlideItemConts>
        <SlideItemType>
          {type.map((txt: string, idx: number) => (
            <span key={txt + idx}>
              {txt === "IA" ? "화면목록(" + txt + ")" : txt}
            </span>
          ))}
        </SlideItemType>

        <SlideItemTitle>
          <Link
            to={ia ? ia : url}
            target="_blank"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </SlideItemTitle>

        <SlideItemDesc>{desc}</SlideItemDesc>

        <SlideItemUrl>
          {ia && renderItemLink(0)}
          {url && renderItemLink(1)}
        </SlideItemUrl>
      </SlideItemConts>
    </SwiperSlideItem>
  );
};

export default SwiperItem;
