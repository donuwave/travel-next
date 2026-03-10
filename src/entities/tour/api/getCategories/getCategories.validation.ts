import { array, mixed, number, object, string } from 'yup';

export const ValidationSchema = array(
  object({
    id: number().required(),
    category_name: string().required(),
    category_photo_url: string().required(),
    cat_description: string().optional(),
    cat_price: mixed<string | number>().optional(),
  }).required()
).required();
