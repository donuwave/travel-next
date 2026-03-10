import { ITourCard } from './tourCard.types';

export interface ITourCategory {
  id: number;
  category_name: string;
  category_photo_url: string;
  cat_description?: string;
  cat_price?: string | number;
}

export interface ITourPhoto {
  id: number;
  tour_photo_url: string;
}

export interface ITourDate {
  id: number;
  start_date: string;
  end_date: string;
  max_slots: number;
  booked_slots: number;
}

export interface IApiTour {
  id: number;
  title: string;
  description: string;
  price: number;
  category: ITourCategory;
  photos: ITourPhoto[];
  dates: ITourDate[];
  document_url: string | null;
}

export interface ITour extends ITourCard {
  id: number;
  rawPrice: number;
  category: ITourCategory;
  photos: ITourPhoto[];
  dates: ITourDate[];
  documentUrl: string | null;
  documentSummary?: {
    categoryName?: string;
    nextDate?: string;
    slots?: string;
  };
}
