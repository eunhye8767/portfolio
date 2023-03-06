import { TypeProps } from "Assets/CommonType";

import DataWork from "db/DataWork";
import SwiperSlider from "components/SwiperSlider";
import BannerList from "components/BannerList";

const Work = ({ type }: TypeProps) => {
  return (
    <>
      {type === "slide" && (
        <SwiperSlider title={DataWork.mainTitle} data={DataWork.slide} />
      )}
      {type === "banner" && (
        <BannerList title={DataWork.subTitle} data={DataWork.banner} />
      )}
    </>
  );
};

export default Work;
