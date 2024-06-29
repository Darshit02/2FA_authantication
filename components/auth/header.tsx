import { cn } from "@/lib/utils";
import { Fingerprint } from "lucide-react";
import { Poppins } from "next/font/google";


const font = Poppins ({
    subsets : ['latin'],
    weight : ["600"]
})

interface HeaderPorps {
    label : string
}


export const Header = ({label} : HeaderPorps) => {
return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <h1  className={cn(
            "flex gap-3  md:gap-5 items-center text-3xl font-semibold",
            font.className
          )}>
            <Fingerprint size={25} />
            Auth
          </h1>
            <p className="text-muted-foreground text-sm">{label}</p>
    </div>
)
}