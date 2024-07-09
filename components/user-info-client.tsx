import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserCheck2Icon } from "lucide-react";

interface UserInfoProps {
  user?: ExtendedUser;
  label?: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader className="flex-row mb-6 flex gap-3 justify-center items-center">
        <UserCheck2Icon className="mt-1.5" />
        <p className="text-2xl font-semibold text-center">{label}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Name</p>
            <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
              {user?.name}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Email</p>
            <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
              {user?.email}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Role</p>
            <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
              {user?.role}
            </p>
          </div>
        </CardContent>
      
    </Card>
  );
};
