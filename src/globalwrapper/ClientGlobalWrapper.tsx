"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogDirect from "@/components/blogs/blogDirect/BlogDirect";
const ClientGlobalWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        {children}
        <BlogDirect/>
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default ClientGlobalWrapper;
