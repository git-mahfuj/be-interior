"use client";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogDirect from "@/components/blogs/blogDirect/BlogDirect";
import MobileBottomMenu from "@/components/Footer/MobileBottomMenu";
import { usePathname, useRouter } from "next/navigation";
const ClientGlobalWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const queryClient = new QueryClient();

  const router = useRouter();
  const pathname = usePathname(); 

  useEffect(() => {
    const handlePopState = () => {

      setTimeout(() => {

        window.location.reload(); 
        
      }, 100);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        {children}
        <BlogDirect />
        <MobileBottomMenu />
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default ClientGlobalWrapper;
