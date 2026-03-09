import { array, number, object, string } from 'yup';

export const ValidationSchema = object({
  id: number().required(),
  title: string().required(),
  description: string().required(),
  price: number().required(),
  category: object({
    id: number().required(),
    category_name: string().required(),
    category_photo_url: string().required(),
  }).required(),
  photos: array(
    object({
      id: number().required(),
      tour_photo_url: string().required(),
    }).required()
  ).required(),
  dates: array(
    object({
      id: number().required(),
      start_date: string().required(),
      end_date: string().required(),
      max_slots: number().required(),
      booked_slots: number().required(),
    }).required()
  ).required(),
  document_url: string().nullable().defined(),
}).required();
