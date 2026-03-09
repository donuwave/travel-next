import { API } from '@/shared/api';
import { getApiUrl } from '@/shared/config';

import { convertationTourById } from './getTourById.convertation';
import { IAPIGetTourById, IGetTourById, ITourById } from './getTourById.types';
import { ValidationSchema } from './getTourById.validation';

export const getTourByIdKey = 'getTourById';

export const getTourById = async ({ id }: IGetTourById): Promise<ITourById | null> => {
  try {
    const { data } = await API<IAPIGetTourById>({
      url: getApiUrl(`/tours/${encodeURIComponent(id)}`),
      method: 'GET',
      next: { revalidate: 60 },
    });
    const isValid = ValidationSchema.isValidSync(data);

    if (!isValid) {
      throw new Error('Failed to validate tour response');
    }

    return convertationTourById(data);
  } catch {
    return null;
  }
};

export * from './getTourById.types';
