import { cn } from "@/lib/utils";
import React from "react";
type Props = {
    className?: string
}
const GoogleLogo = ({className}: Props) => {
    return (
      <h1 className={cn("flex items-center", className)}>
        <big className="text-primary">G</big>
        <span className="text-red-600">o</span>
        <span className="text-orange-500">o</span>
        <span className="text-primary">g</span>
        <span className="text-green-700">l</span>
        <span className="inline-block -rotate-12 text-red-600">e</span>
      </h1>
    );
};

export default GoogleLogo;
