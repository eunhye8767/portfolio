import React, { Dispatch, SetStateAction, useState,useEffect, useRef } from "react";

// import { TypeProps, CoordTypeProps } from "Assets/CommonType";

import DataWork from "db/DataWork";
import SwiperSlider from "components/SwiperSlider";
import List from "components/List";

interface Props {
  type: string;
  ref?: React.LegacyRef<HTMLDivElement> | undefined
  // setOffsetWork?: Dispatch<SetStateAction<number>> | null;
  // setOffsetWork?:React.RefObject<HTMLDivElement>.current: HTMLDivElement | null
}

const Work = ({ ref, type }: Props) => {
  // const workRef = useRef<HTMLDivElement>(null);
  // console.log(secCoordList);

  useEffect(() => {
    // secCoordList.work = workRef.current?.offsetTop;
  }, []);

  return (
    <div ref={ref}>
      {type === "slide" && (
        <SwiperSlider title={DataWork.mainTitle} data={DataWork.slide} />
      )}
      {type === "banner" && (
        <List title={DataWork.subTitle} data={DataWork.banner} more={true} />
      )}
    </div>
  );
};

export default Work;
