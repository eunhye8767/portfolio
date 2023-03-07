import { Link } from "react-router-dom";
import { PropsList } from "Assets/CommonType";

import { ListPaginationSection, ListPaginationGroup } from "./style";

const ListPagination = ({ data }: PropsList) => {
  return (
    <ListPaginationSection>
      <ListPaginationGroup>
        {data &&
          data.map((item) => {
            const { id, title, url } = item;
            return (
              <li key={title + id}>
                <Link to={url} target="_blank">
                  <p className="id">No. {id}</p>
                  <p className="tit">
                    <span>{title}</span>
                  </p>
                </Link>
              </li>
            );
          })}
      </ListPaginationGroup>
    </ListPaginationSection>
  );
};

export default ListPagination;
