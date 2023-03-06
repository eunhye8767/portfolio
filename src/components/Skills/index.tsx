import DataSkills from "db/DataSkills";
import SwiperSlider from "components/SwiperSlider";
import BannerList from "components/BannerList";

type Props = {
  type: string;
};

const Work = ({ type }: Props) => {
  return (
    <>
      {type === "slide" && (
        <SwiperSlider title={DataSkills.mainTitle} data={DataSkills.slide} />
      )}
      {type === "list" && (
        "zz"
      )}
    </>
  );
};

export default Work;
