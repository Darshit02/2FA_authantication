"use server";
import { z } from "zod";
import { RagisterSchema } from "@/schemas";

export const ragister = async (values: z.infer<typeof RagisterSchema>) => {
  const validateFields = RagisterSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      error: "Invalid fields",
    };
  }
  return {
    success: "Email sent",
  };
};
