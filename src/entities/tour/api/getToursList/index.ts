import { API } from '@/shared/api';
import { getApiUrl } from '@/shared/config';

import { convertationToursList } from './getToursList.convertation';
import { IAPIGetToursList, IGetToursList, ITourListItem } from './getToursList.types';
import { ValidationSchema } from './getToursList.validation';

export const getToursListKey = 'getToursList';

export const getToursList = async ({ categoryId }: IGetToursList): Promise<ITourListItem[]> => {
  try {
    const { data } = await API<IAPIGetToursList>({
      url: getApiUrl('/tours'),
      method: 'GET',
      params: { category_id: categoryId },
      next: { revalidate: 60 },
    });
    const isValid = ValidationSchema.isValidSync(data);

    if (!isValid) {
      throw new Error('Failed to validate tours response');
    }

    return convertationToursList(data);
  } catch {
    return [];
  }
};

export * from './getToursList.types';
