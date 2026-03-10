import { IAPIGetCategoriesListItem, ICategoryCard } from '../getCategories/getCategories.types';

export interface IGetCategoryById {
  id: string;
}

export type IAPIGetCategoryById = IAPIGetCategoriesListItem;

export type ICategoryById = ICategoryCard;
