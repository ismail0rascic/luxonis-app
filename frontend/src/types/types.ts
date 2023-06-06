export type q = {
  limit: number;
  page: number;
};

export type image = {
  href: string;
};

export interface Estate {
  title: string;
  location: string;
  price: number;
  images: string[] | image[] 
  id?:string
}


export interface state {
  length: number;
  data: Estate[];
}
