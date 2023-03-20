import { Link } from "react-router-dom";
import { PropsList, TypeItems } from "Assets/CommonType";

import { ListMoreSection, ListMoreGroup } from "./style";

const ListMore = ({ data, dataCount, countNumber }: PropsList) => {
  return (
    <ListMoreSection>
      <ListMoreGroup>
        {data.map((item: TypeItems, idx: number) => {
          const { id, title, img, url } = item;
          if (countNumber && dataCount * countNumber <= idx) return false;
          return (
            <li key={id}>
              <Link to={url} target="_blank">
                <img src={img} alt={id + title} />
              </Link>
            </li>
          );
        })}
      </ListMoreGroup>
    </ListMoreSection>
  );
};

export default ListMore;
