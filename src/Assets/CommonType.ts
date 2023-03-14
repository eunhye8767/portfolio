import React from "react";

export type TypeProps = {
  type: string;
};

export interface PropsConts {
  cate: string;
}

export interface TypeDataItems {
  mainTitle: Array<TypeItems>;
  subTitle: string;
  slide?: Array<TypeDataItems>;
  banner?: Array<TypeDataItems>;
  list?: Array<TypeDataItems>;
}

export interface Props {
  data: Array<TypeItems>;
  items?: Array<TypeItems>;
  title?: string;
}

export interface TypeItems {
  id: number;
  title: string;
  img?: string;
  url: string;
}

export interface ButtonProps {
  [k: string]: React.MouseEventHandler<HTMLButtonElement>;
}

export interface PropsList extends Props {
  dataCount: number;
  countNumber?: number;
  maxNumber?: number;
}