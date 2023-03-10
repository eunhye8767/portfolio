import { TypeProps } from "Assets/CommonType"

import DataWork from "db/DataWork";
import SwiperSlider from "components/SwiperSlider";
import List from "components/List";

const Work = ({ type }: TypeProps) => {
  return (
    <>
      {type === "slide" && (
        <SwiperSlider
          title={DataWork.mainTitle}
          data={DataWork.slide}
        />
      )}
      {type === "banner" && (
        <List title={DataWork.subTitle} data={DataWork.banner} more={true} />
      )}
    </>
  );
};

export default Work;
