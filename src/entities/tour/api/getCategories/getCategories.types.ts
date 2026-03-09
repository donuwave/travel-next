import { ITourCard } from '../../model/tourCard.types';

export type IAPIGetCategoriesListItem = {
  id: number;
  category_name: string;
  category_photo_url: string;
  description?: string;
  price?: string | number;
};

export type IAPIGetCategoriesList = IAPIGetCategoriesListItem[];

export type ICategoryCard = ITourCard & {
  id: number;
  shortDescription: string;
  heroBackground: string;
  heroImage: string;
};
