import { getAssetUrl } from '@/shared/config';

import { IAPIGetTour, IAPIGetToursList, ITourListItem } from './getToursList.types';
import { getCategoryMeta } from '../getCategories/getCategories.convertation';

export const convertationTour = (tour: IAPIGetTour): ITourListItem => {
  const meta = getCategoryMeta(tour.category.id);
  const nextDate = tour.dates[0];
  const photos = tour.photos.map((photo) => ({
    ...photo,
    tour_photo_url: getAssetUrl(photo.tour_photo_url),
  }));
  const category = {
    ...tour.category,
    category_photo_url: getAssetUrl(tour.category.category_photo_url),
  };

  return {
    id: tour.id,
    title: tour.title,
    description: tour.description,
    rawPrice: tour.price,
    price: tour.price.toLocaleString('ru-RU'),
    link: photos[0]?.tour_photo_url || category.category_photo_url || '/tour.png',
    category,
    photos,
    dates: tour.dates,
    documentUrl: getAssetUrl(tour.document_url),
    documentSummary: {
      categoryName: category.category_name,
      nextDate: nextDate ? `${nextDate.start_date} - ${nextDate.end_date}` : undefined,
      slots: nextDate ? `${nextDate.booked_slots}/${nextDate.max_slots} мест занято` : undefined,
    },
    Icon: meta.Icon,
    iconColors: ['#FFF9F0', '#FAF3E8'],
    color: '#F5F0E8',
  };
};

export const convertationToursList = (data: IAPIGetToursList): ITourListItem[] => {
  return data.map(convertationTour);
};
