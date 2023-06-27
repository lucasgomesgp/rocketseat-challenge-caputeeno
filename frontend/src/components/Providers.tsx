"use client";
import { FilterProvider } from "@/contexts/Filter";
import { ProductProvider } from "@/contexts/Product";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <FilterProvider>
        <ProductProvider>
          <Toaster position="top-right" reverseOrder={false} />
          {children}
        </ProductProvider>
      </FilterProvider>
    </QueryClientProvider>
  );
}
