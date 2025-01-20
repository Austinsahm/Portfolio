export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  largeImage?: string;
  demo?: string;
  code?: string;
  details: string;
  tags?: string[];
  pictures?: {
    id: string;
    url: string;
    name?: string;
    description?: string;
  }[];
};
