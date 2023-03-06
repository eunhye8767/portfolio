export type TypeProps = {
  type: string;
};

export interface Props {
  data: Array<TypeItems>;
  title?: string;
}

export interface TypeItems {
  id: number;
  title: string;
  img?: string;
  url: string;
}