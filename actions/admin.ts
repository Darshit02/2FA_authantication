"use server"

import { currentRole } from "@/lib/auth"
import { UserRole } from "@prisma/client"

export const admin = async () => {
    const role =await currentRole()

    if (role === UserRole.ADMIN) {
        return { 
            error : "Allowed access to admin route"
          }
    }

    return { 
        error : "Access denied to admin route"
     }
}