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
  const links = [url, ia];

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

        {url.length > 0 ? (
          <SlideItemTitle>
            <Link
              to={url}
              target="_blank"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </SlideItemTitle>
        ) : (
          <SlideItemTitle dangerouslySetInnerHTML={{ __html: title }} />
        )}

        <SlideItemDesc>{desc}</SlideItemDesc>

        <SlideItemUrl>
          {links.map(
            (link: string, idx: number) =>
              link.length > 0 && (
                <Link to={link} target="_blank" key={link + idx}>
                  <Icon size={16} color={color.lightGrey} icon="link" />
                  <span>{idx === 0 ? "WEB" : "화면목록(IA)"}</span>
                </Link>
              )
          )}
        </SlideItemUrl>
      </SlideItemConts>
    </SwiperSlideItem>
  );
};

export default SwiperItem;
