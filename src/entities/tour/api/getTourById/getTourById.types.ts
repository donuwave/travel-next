import { IAPIGetTour, ITourListItem } from '../getToursList/getToursList.types';

export interface IGetTourById {
  id: string;
}

export type IAPIGetTourById = IAPIGetTour;

export type ITourById = ITourListItem;
