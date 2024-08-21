import { z } from "zod";

const parseDateString = (dateStr) => {
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? undefined : date;
};

export const BatchCreateValidator = z.object({
  name: z.string().min(1, "Name Required"),
  display_name: z.string().min(1, "Display name required"),
  start_year: z
    .string()
    .transform(parseDateString)
    .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
      message: "Start date must be a valid date",
    }),
  end_year: z
    .string()
    .transform(parseDateString)
    .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
      message: "End date must be a valid date",
    }),
});
