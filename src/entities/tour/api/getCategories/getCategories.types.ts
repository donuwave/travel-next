import { ITourCard } from '../../model/tourCard.types';

export type IAPIGetCategoriesListItem = {
  id: number;
  category_name: string;
  category_photo_url: string;
  cat_description?: string;
  cat_price?: string | number;
};

export type IAPIGetCategoriesList = IAPIGetCategoriesListItem[];

export type ICategoryCard = Omit<ITourCard, 'link'> & {
  id: number;
  image: string;
  shortDescription: string;
  heroBackground: string;
};
