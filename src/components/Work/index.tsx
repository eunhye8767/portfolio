import { Dispatch, SetStateAction } from "react";

import DataWork from "db/DataWork";
import SwiperSlider from "components/SwiperSlider";
import List from "components/List";

type TypeProps = {
  type: string;
  setNavCurrNuber?:Dispatch<SetStateAction<number>>;
};

const Work = ({ type, setNavCurrNuber }: TypeProps) => {
  return (
    <>
      {type === "slide" && (
        <SwiperSlider
          title={DataWork.mainTitle}
          data={DataWork.slide}
          swiperId={"work"}
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
