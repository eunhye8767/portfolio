import DataWork from "db/DataWork";
import SwiperSlider from "components/SwiperSlider";
import BannerList from "components/BannerList";

type Props = {
  type: string;
};

const Work = ({ type }: Props) => {
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
