import { IApiTour, ITour } from '../../model/tour.types';

export interface IGetToursList {
  categoryId: string;
}

export type IAPIGetTour = IApiTour;

export type IAPIGetToursList = IAPIGetTour[];

export type ITourListItem = ITour;
