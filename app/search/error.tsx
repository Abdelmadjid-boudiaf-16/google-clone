"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center mt-20 flex-col gap-y-6">
      <h2 className="text-3xl">Something went wrong!</h2>
      <Button size={'lg'} onClick={() => reset()} >Try again</Button>
    </div>
  );
}
