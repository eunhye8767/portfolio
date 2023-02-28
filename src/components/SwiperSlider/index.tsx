import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

// Import Swiper React components
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { SwiperSection, SwiperArea, SwiperTitle } from "./style";

interface Props {
  data: Array<TypeSwiper>;
  title: string[];
}

interface TypeSwiper {
  id: number;
  title: string;
  type: string;
  desc: string;
  url: string;
  ia: string;
}

const SwiperSlider = ({ title, data }: Props) => {
  return (
    <SwiperSection>
      <SwiperTitle>
        {title.map((tit: string, idx: number) => (
          <span key={`${tit}${idx}`}>{tit}</span>
        ))}
      </SwiperTitle>

      <SwiperArea>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ type: "fraction" }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
        </Swiper>
      </SwiperArea>
    </SwiperSection>
  );
};

export default SwiperSlider;
