import { Link } from "react-router-dom";
import { PropsList, TypeItems } from "Assets/CommonType";

import { ListPaginationSection, ListPaginationGroup } from "./style";
import { useEffect, useState } from "react";

const ListPagination = ({ data }: PropsList) => {
  
  const renderTargetSelf = (item: TypeItems) => {
    const { id, title, url } = item;
    return (
      <Link to={url}>
        <p className="id">No. {id}</p>
        <p className="tit">
          <span>{title}</span>
        </p>
      </Link>
    );
  };

  return (
    <ListPaginationSection>
      <ListPaginationGroup>
        {data &&
          data.map((item) => {
            const { id, title, url } = item;

            // if (url.includes("playground/")) {
            //   return <li key={title + id}>{renderTargetSelf(item)}</li>;
            // }
            return (
              <li key={title + id}>
                {/* <Link to={url} target="_blank"> */}
                {/* <Link to={{  pathname: "https://github.com/vinothsmart/" }} target="_blank" /> */}
                <Link to={url} target="_blank"  rel="noopener noreferrer">
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
