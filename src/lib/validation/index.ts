import * as z from "zod";
import { ERROR_MESSAGE } from "../constants";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const AgentValidation = z.object({
  name: z.string().min(2, { message: ERROR_MESSAGE.VALIDATION }),
  surname: z.string().min(2, { message: ERROR_MESSAGE.VALIDATION }),
  email: z
    .string()
    .email(ERROR_MESSAGE.VALIDATION)
    .regex(/@redberry\.ge$/, ERROR_MESSAGE.VALIDATION),
  phone: z.string().regex(phoneRegex, ERROR_MESSAGE.VALIDATION),
  avatar: z.string(),
});
