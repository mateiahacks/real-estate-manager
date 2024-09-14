import * as z from "zod";
import { ERROR_MESSAGE } from "../constants";

const numberRegex = new RegExp(/^\d+$/);
const phoneRegex = new RegExp(/^5\d{8}$/);

export const AgentValidation = z.object({
  name: z.string().min(2, { message: ERROR_MESSAGE.VALIDATION }),
  surname: z.string().min(2, { message: ERROR_MESSAGE.VALIDATION }),
  email: z
    .string()
    .email(ERROR_MESSAGE.VALIDATION)
    .regex(/@redberry\.ge$/, ERROR_MESSAGE.VALIDATION),
  phone: z.string().regex(phoneRegex, ERROR_MESSAGE.VALIDATION),
  avatar: z.any(),
});

export const RealEstateValidation = z.object({
  address: z.string().min(2, { message: ERROR_MESSAGE.VALIDATION }),
  zip_code: z.string().regex(numberRegex, ERROR_MESSAGE.VALIDATION),
  price: z.string().regex(numberRegex, ERROR_MESSAGE.VALIDATION),
  area: z.string().regex(numberRegex, ERROR_MESSAGE.VALIDATION),
  bedrooms: z.string().regex(numberRegex, ERROR_MESSAGE.VALIDATION),
  description: z
    .string()
    .refine((value) => value.trim().split(/\s+/).filter(Boolean).length >= 5, {
      message: ERROR_MESSAGE.VALIDATION,
    }),
  image: z.any(),
});
