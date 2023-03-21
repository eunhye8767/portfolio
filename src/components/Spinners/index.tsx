import BarLoader from "react-spinners/BarLoader";
import { color } from "Assets/StyleVariable";
import { SpinnersSection, SpinnersGroup, SpinnersItem } from "./style";

function Spinners() {
  return (
    <SpinnersSection>
      <SpinnersGroup>
        <SpinnersItem>
          <BarLoader color={color.lightGrey} />
          <p className="txt">loading...</p>
        </SpinnersItem>
      </SpinnersGroup>
    </SpinnersSection>
  );
}

export default Spinners;
