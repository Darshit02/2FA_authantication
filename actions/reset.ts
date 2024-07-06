"use server"

import { z } from "zod";
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sentPasswordResetEmail } from "@/lib/mail";


export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid Email!" };
    }

    const { email} =validatedFields.data
    
    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "User not found" };
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    await sentPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    )

    return { success: "Password reset link sent to your email" };
}