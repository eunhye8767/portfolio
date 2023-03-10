// Import Swiper React components
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { SwiperSection, SwiperTitle } from "./style";

import SwiperItem from "./SwiperItem";

interface Props {
  data: Array<TypeSwiper>;
  title: string[];
}

interface TypeSwiper {
  id: number;
  img: string;
  title: string;
  type: string[];
  desc: string;
  url: string;
  ia: string;
}

const SwiperSlider = ({ title, data }: Props) => {
  return (
    <SwiperSection>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1.1}
        navigation
        pagination={{ type: "fraction" }}
        breakpoints={{
          "768": {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperTitle>
          {title.map((tit: string, idx: number) => (
            <span key={`${tit}${idx}`}>{tit}</span>
          ))}
        </SwiperTitle>

        {data.map((item: TypeSwiper, idx: number) => {
          const { title, img, type, desc, url, ia } = item;

          return (
            <SwiperSlide key={item.id}>
              <SwiperItem
                title={title}
                img={img}
                type={type}
                desc={desc}
                url={url}
                ia={ia}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperSection>
  );
};

export default SwiperSlider;
