"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { KeyRound } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const AdminPage = () => {
  const onServerActionClick = async () => {
    admin().then((res) => {
      if (res.error) {
        toast.error(res.error)
      } else {
        toast.success(res.error)
      }
    })
  }

  const onApiRouteClick = async () => {
    fetch("/api/admin")
    .then((res) => {
      if (res.ok) {
        toast.success("Allowed access to admin route")
      } else {
        toast.error("Access denied to admin route")
  }})
  }
  return (
    <Card className="w-[600px]">
      <CardHeader className="text-2xl font-semibold text-center w-full">
        <div className="flex justify-center items-center gap-3">
          <KeyRound />
          <p>Admin</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRoles={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to access this page." />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Admin-Only API route
          </p>
          <Button onClick={onApiRouteClick}>
            Click to test
          </Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Admin-Only server Action
          </p>
          <Button onClick={onServerActionClick}>
            Click to test
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
