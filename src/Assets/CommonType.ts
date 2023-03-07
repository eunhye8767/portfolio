export type TypeProps = {
  type: string;
};

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

export interface PropsList extends Props {
  dataCount: number;
  countNumber?:number | undefined;
  maxNumber?:number;
}