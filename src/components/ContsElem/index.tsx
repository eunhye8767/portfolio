import { PropsConts } from "Assets/CommonType";

import DataWork from "db/DataWork";
import DataSkills from "db/DataSkills";

import SwiperSlider from "components/SwiperSlider";
import List from "components/List";

const Work = ({ cate }: PropsConts) => {
  return (
    <>
      {cate === "work" && (
        <>
          <SwiperSlider title={DataWork.mainTitle} data={DataWork.slide} />
          <List title={DataWork.subTitle} data={DataWork.banner} more={true} />
        </>
      )}
      {cate === "skills" && (
        <>
          <SwiperSlider title={DataSkills.mainTitle} data={DataSkills.slide} />
          <List
            title={DataSkills.subTitle}
            data={DataSkills.list}
            more={false}
          />
        </>
      )}
    </>
  );
};

export default Work;
