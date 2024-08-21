import { z } from "zod";

export const TimetableCreateValidator = z.object({
  professor_id: z.string().min(1, "Choose a professor"),
  batch_id: z.string().min(1, "Choose a batch"),
  subject_id: z.string().min(1, "Choose a subject"),
  time: z.string().min(1, "Time slot is required"),
});
