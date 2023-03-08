import DataSkills from "db/DataSkills";
import SwiperSlider from "components/SwiperSlider";
import List from "components/List";

type TypeProps = {
  type: string;
  setNavCurrNuber?: React.Dispatch<React.SetStateAction<number>>;
};

const Work = ({ type, setNavCurrNuber }: TypeProps) => {
  return (
    <>
      {type === "slide" && (
        <SwiperSlider
          title={DataSkills.mainTitle}
          data={DataSkills.slide}
          swiperId={"skills"}
          setNavCurrNuber={setNavCurrNuber}
        />
      )}
      {type === "list" && (
        <List title={DataSkills.subTitle} data={DataSkills.list} more={false} />
      )}
    </>
  );
};

export default Work;
