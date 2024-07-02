import React from "react";
import CardWrapper from "@/components/auth/card-wrapper";
import { TriangleAlert } from "lucide-react";

const ErrorCard = () => {
  return (
    <CardWrapper
     headerLabel="Oops! Something went wrong"
        backButtonLabel="Back to Login"
        backButtonHref="/auth/login"
        showSocial={false}
    >
        <div className="w-full flex items-center justify-center">
            <TriangleAlert className="text-destructive"/>
        </div>
    </CardWrapper>
  );
};

export default ErrorCard;
