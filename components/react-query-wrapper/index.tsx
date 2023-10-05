"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
/* import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"; */
import type { ReactNode } from "react";
import React, { useState } from "react";

interface ReactQueryWrapperProps {
  children: ReactNode;
}

export default function ReactQueryWrapper({
  children,
}: ReactQueryWrapperProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
