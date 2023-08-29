"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import React from "react";

const queryClient = new QueryClient();
interface ReactQueryWrapperProps {
  children: ReactNode;
}

export default function ReactQueryWrapper({
  children,
}: ReactQueryWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
