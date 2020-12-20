export interface Message {
  message: string;
}

export interface Media {
  id: string;
  type: MediaType;
  url: string;
}

export enum MediaType {
  Video = 'video',
  Image = 'image'
}

export interface Product {
  id: string;
  media: Media[];
  name: string;
  order: number;
  vendor: string;
}

export interface Promotion {
  text: string;
  order: number;
  hide: boolean;
}
