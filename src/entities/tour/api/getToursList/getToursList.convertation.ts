import { BussExcursionsIcon, BussIcon, ButterflyIcon, InfinityShapeIcon } from '@/shared/assets';

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

  return {
    id: tour.id,
    title: tour.title,
    description: tour.description,
    rawPrice: tour.price,
    price: tour.price.toLocaleString('ru-RU'),
    link: tour.photos[0]?.tour_photo_url || tour.category.category_photo_url || '/tour.png',
    category: tour.category,
    photos: tour.photos,
    dates: tour.dates,
    documentUrl: tour.document_url,
    documentSummary: {
      categoryName: tour.category.category_name,
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
