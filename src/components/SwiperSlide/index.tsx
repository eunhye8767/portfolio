import { color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";

import { SwiperSection, SwiperTitle } from "./style";

interface Props {
  data: Array<Swiper>;
  title: string;
}

interface Swiper {
  id: number;
  title: string;
  type: string;
  desc: string;
  url: string;
  ia: string;
}

const SwiperSlide = ({ title, data }: Props) => {
  return (
    <SwiperSection>
      <SwiperTitle>
        {title.replace("/n", "<br />")}
      </SwiperTitle>
      SwiperSlide
    </SwiperSection>
  );
};

export default SwiperSlide;
