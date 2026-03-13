import { BussExcursionsIcon, BussIcon, ButterflyIcon, InfinityShapeIcon } from '@/shared/assets';
import { getAssetUrl } from '@/shared/config';

import { IAPIGetCategoriesList, ICategoryCard } from './getCategories.types';
import { ITourCard } from '../../model/tourCard.types';

type CategoryCardMeta = Pick<ITourCard, 'Icon' | 'color' | 'iconColors'> & {
  heroBackground: string;
};

const categoryCardMetaSequence: CategoryCardMeta[] = [
  {
    Icon: BussIcon,
    iconColors: ['#FFEEC9', '#FFE7B2'],
    color: '#FCE2A9FF',
    heroBackground: '#f6e8c8',
  },
  {
    Icon: BussExcursionsIcon,
    iconColors: ['#F6D9E3FF', '#F5CAD8FF'],
    color: '#F3C6D5FF',
    heroBackground: '#f4dbe6',
  },
  {
    Icon: InfinityShapeIcon,
    iconColors: ['#DBDBF0FF', '#CDCDE9FF'],
    color: '#CBCBE5FF',
    heroBackground: '#dcd8f2',
  },
  {
    Icon: ButterflyIcon,
    iconColors: ['#EEFAC6FF', '#E3F0B7FF'],
    color: '#E1EDB8FF',
    heroBackground: '#eaf2ca',
  },
];

const defaultCategoryMeta: CategoryCardMeta = {
  Icon: BussIcon,
  iconColors: ['#EFE7DB', '#E7DAC8'],
  color: '#F5F0E8',
  heroBackground: '#f5f0e8',
};

export const getCategoryMeta = (id: number): CategoryCardMeta => {
  if (id > 0) {
    return (
      categoryCardMetaSequence[(id - 1) % categoryCardMetaSequence.length] ?? defaultCategoryMeta
    );
  }

  return defaultCategoryMeta;
};

export const convertCategory = (category: IAPIGetCategoriesList[number]): ICategoryCard => {
  const meta = getCategoryMeta(category.id);
  const price =
    typeof category.cat_price === 'number'
      ? category.cat_price.toLocaleString('ru-RU')
      : typeof category.cat_price === 'string' && category.cat_price.trim()
        ? category.cat_price
        : '0';
  const description = category.cat_description?.trim() || '';

  return {
    id: category.id,
    title: category.category_name,
    image: getAssetUrl(category.category_photo_url) || '/tour.png',
    shortDescription: description,
    description,
    price,
    heroBackground: meta.heroBackground,
    Icon: meta.Icon,
    iconColors: meta.iconColors,
    color: meta.color,
  };
};

export const convertationCategoriesList = (data: IAPIGetCategoriesList): ICategoryCard[] => {
  return data.map(convertCategory);
};
