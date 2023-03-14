import { PropsConts } from "Assets/CommonType";

import DataWork from "db/DataWork";
import DataSkills from "db/DataSkills";

import SwiperSlider from "components/SwiperSlider";
import List from "components/List";

const Work = ({ cate }: PropsConts) => {
  const renderList = (DATA: any, MORE: boolean) => {
    return (
      <>
        <SwiperSlider title={DATA.mainTitle} data={DATA.slide} />
        {MORE ? (
          <List title={DATA.subTitle} data={DATA.banner} more={MORE} />
        ) : (
          <List title={DATA.subTitle} data={DATA.list} more={MORE} />
        )}
      </>
    );
  };

  return (
    <>
      {cate === "work" && renderList(DataWork, true)}
      {cate === "skills" && renderList(DataSkills, false)}
    </>
  );
};

export default Work;
