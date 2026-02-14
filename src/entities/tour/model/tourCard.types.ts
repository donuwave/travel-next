import { ComponentType } from 'react';

export interface ITourCard {
  title: string;
  price: string;
  link: string;
  Icon: ComponentType<{ imageUrl?: string; colors: string[] }>;
  color: string;
  iconColors: string[];
  description?: string;
}

export interface ISTourCard {
  $color: string;
}
