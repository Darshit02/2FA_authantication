"use server";
import { z } from "zod";
import { RagisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";


export const ragister = async (values: z.infer<typeof RagisterSchema>) => {
  const validateFields = RagisterSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      error: "Invalid fields",
    };
  }
  const { email, password, name } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "User already exists",
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  //TODO : Send Varification Email
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return {
    success: "confirmation email sent",
  };
};
