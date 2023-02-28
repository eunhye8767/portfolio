import DataWork from "db/DataWork";
import SwiperSlider from "components/SwiperSlider";


type Props = {
  type: string;
};

const Work = ({ type }: Props) => {
  return (
    <>
      {type === "slide" && (
        <SwiperSlider title={DataWork.mainTitle} data={DataWork.slide} />
      )}
      {type === "banner" && "배너용"}
    </>
  );
};

export default Work;
