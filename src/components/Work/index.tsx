import DataWork from "db/DataWork";
import SwiperSlide from "components/SwiperSlide";


type Props = {
  type: string;
};

const Work = ({ type }: Props) => {
  return (
    <>
      {type === "slide" && (
        <SwiperSlide title={DataWork.mainTitle} data={DataWork.slide} />
      )}
      {type === "banner" && "배너용"}
    </>
  );
};

export default Work;
