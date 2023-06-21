"use client";
import { FilterProvider } from "@/contexts/Filter";
import { ProductProvider } from "@/contexts/Product";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ProductProvider>
        <FilterProvider>
          <ToastContainer />
          {children}
        </FilterProvider>
      </ProductProvider>
    </QueryClientProvider>
  );
}
