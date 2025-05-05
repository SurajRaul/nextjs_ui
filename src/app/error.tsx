"use client";

import ErrorDisplay from "@/components/Error-Display";
import { useEffect, useState } from "react";

interface Message {
  error: { message: string };
  reset: () => void;
}

export default function Error({ error, reset }: Message) {
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() => {
    setMessage(error.message);
    console.log(error);
  }, [error]);

  return (
    <div>
      <h1>App Page Error</h1>
      <ErrorDisplay message={message} reset={reset} />
    </div>
  );
}
