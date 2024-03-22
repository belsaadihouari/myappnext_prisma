import { z } from "zod";

export const validation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(100)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
      message:
        "The password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
    }),
  confiPassword: z
    .string()
    .min(8)
    .max(100)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
      message:
        "The password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
    }),
});
