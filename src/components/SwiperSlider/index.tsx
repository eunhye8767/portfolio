import { useEffect, useRef, useState } from "react";

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
  swiperId?: string;
  setNavCurrNuber?: React.Dispatch<React.SetStateAction<number>>;
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

const SwiperSlider = ({ title, data, swiperId, setNavCurrNuber }: Props) => {
  const scrollRef = useRef<HTMLHtmlElement>(null);
  const [scrollDirect, setScrollDirect] = useState<boolean>(false);

  const yScrollEvent = () => {
    const scroll = scrollRef.current?.getBoundingClientRect();

    if (scroll && setNavCurrNuber) {
      let scrollTop = scroll.top;
      const FixHeight = window.innerHeight;
      const FixMinHeight = FixHeight * 0.1;
      const FixMaxHeight = FixHeight * 0.8;

      if (scrollDirect) {
        // console.log("up");
        if (0 < scrollTop && scrollTop < FixMinHeight) {
          if (swiperId === "work") setNavCurrNuber(1);
          if (swiperId === "skills") setNavCurrNuber(2);
        }
      } else {
        // console.log("down");
        if (FixHeight * 0.5 < scrollTop && scrollTop < FixMaxHeight) {
          if (swiperId === "work") setNavCurrNuber(0);
          if (swiperId === "skills") setNavCurrNuber(1);
        }
      }
    }
  };

  const yWheelEvent = (e: WheelEvent) => {
    0 < e.deltaY ? setScrollDirect(true) : setScrollDirect(false);
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    yScrollEvent();
    window.addEventListener("resize", yScrollEvent);
    return window.removeEventListener("resize", yScrollEvent);
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener("scroll", yScrollEvent);
    window.addEventListener("wheel", yWheelEvent);

    return () => {
      window.removeEventListener("scroll", yScrollEvent);
      window.removeEventListener("wheel", yWheelEvent);
    };
  }, [scrollRef.current, scrollDirect]);

  return (
    <SwiperSection ref={scrollRef}>
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
