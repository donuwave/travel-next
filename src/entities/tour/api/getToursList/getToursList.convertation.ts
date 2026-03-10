import { BussExcursionsIcon, BussIcon, ButterflyIcon, InfinityShapeIcon } from '@/shared/assets';
import { getAssetUrl } from '@/shared/config';

import { IAPIGetTour, IAPIGetToursList, ITourListItem } from './getToursList.types';
import { ITourCard } from '../../model/tourCard.types';

type TourCardMeta = Pick<ITourCard, 'Icon' | 'color' | 'iconColors'>;

const tourCardMetaSequence: TourCardMeta[] = [
  { Icon: BussIcon, iconColors: ['#FFF9F0', '#FAF3E8'], color: '#F5F0E8' },
  { Icon: BussExcursionsIcon, iconColors: ['#FFF9F0', '#FAF3E8'], color: '#F5F0E8' },
  { Icon: InfinityShapeIcon, iconColors: ['#FFF9F0', '#FAF3E8'], color: '#F5F0E8' },
  { Icon: ButterflyIcon, iconColors: ['#FFF9F0', '#FAF3E8'], color: '#F5F0E8' },
];

const getTourMeta = (index: number): TourCardMeta => {
  return tourCardMetaSequence[index % tourCardMetaSequence.length];
};

export const convertationTour = (tour: IAPIGetTour, index = 0): ITourListItem => {
  const meta = getTourMeta(index);
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
    iconColors: meta.iconColors,
    color: meta.color,
  };
};

export const convertationToursList = (data: IAPIGetToursList): ITourListItem[] => {
  return data.map((tour, index) => convertationTour(tour, index));
};
