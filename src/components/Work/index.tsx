import { Dispatch, SetStateAction, useEffect, useRef } from "react";

// import { TypeProps, CoordTypeProps } from "Assets/CommonType";

import DataWork from "db/DataWork";
import SwiperSlider from "components/SwiperSlider";
import List from "components/List";

interface Props {
  type: string;
  setCurrNumber?:React.Dispatch<React.SetStateAction<number>>;
  // setCurrNumber?: number | undefined;
  // setCurrNumber?: Dispatch<SetStateAction<number>> | undefined;
  // setOffsetWork?: Dispatch<SetStateAction<number>> | null;
  // setOffsetWork?:React.RefObject<HTMLDivElement>.current: HTMLDivElement | null
}

const Work = ({ type, setCurrNumber }: Props) => {
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollY = workRef.current?.offsetTop;
    if (setCurrNumber && scrollY) setCurrNumber(scrollY)
    console.log(workRef.current);
  }, [])

  
  return (
    <div ref={workRef}>
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
