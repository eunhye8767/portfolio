import { TypeProps } from "Assets/CommonType";

import DataSkills from "db/DataSkills";
import SwiperSlider from "components/SwiperSlider";
import List from "components/List";

const Work = ({ type }: TypeProps) => {
  return (
    <>
      {type === "slide" && (
        <SwiperSlider title={DataSkills.mainTitle} data={DataSkills.slide} />
      )}
      {type === "list" && (
        <List title={DataSkills.subTitle} data={DataSkills.list} more={false} />
      )}
    </>
  );
};

export default Work;
