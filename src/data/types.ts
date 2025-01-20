export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  largeImage?: string;
  demo?: string;
  code?: string;
  details: string;
  pictures?: Pictures[];
  tags?: [string];
}

export interface Pictures {
  id: string;
  url: string;
  name: string;
  description: string;
}
