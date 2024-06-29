"use client"

import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

export const Social = () => {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button size='lg' className="w-full" variant="outline" onClick={() => {}} >
                <FcGoogle size={20} />
            </Button>
            <Button size='lg' className="w-full" variant="default" onClick={() => {}}>
                <FaGithub size={20} />
            </Button>
        </div>
    )
} 