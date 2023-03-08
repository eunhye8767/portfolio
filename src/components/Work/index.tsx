// import { TypeProps } from "Assets/CommonType";

import DataWork from "db/DataWork";
import SwiperSlider from "components/SwiperSlider";
import List from "components/List";
import { Dispatch, SetStateAction } from "react";

type TypeProps = {
  type: string;
  setNavCurrNuber?: React.Dispatch<React.SetStateAction<number>>;
};

const Work = ({ type, setNavCurrNuber }: TypeProps) => {
  return (
    <>
      {type === "slide" && (
        <SwiperSlider
          title={DataWork.mainTitle}
          data={DataWork.slide}
          setNavCurrNuber={setNavCurrNuber}
        />
      )}
      {type === "banner" && (
        <List title={DataWork.subTitle} data={DataWork.banner} more={true} />
      )}
    </>
  );
};

export default Work;
