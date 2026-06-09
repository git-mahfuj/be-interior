"use client";
import InteriorProjects from "@/components/interior-project/all-interior/InteriorProjects";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import InteriorProjectsSkeleton from "@/components/interior-project/skeleton/InteriorSkeleton";


const Allinteriorpage = () => {

  return (
    <div>
      <ErrorBoundary fallback={<div>প্রজেক্ট লোড করতে সমস্যা হয়েছে।</div>}>
        <Suspense
          fallback={
            <InteriorProjectsSkeleton/>
          }
        >
          <InteriorProjects />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Allinteriorpage;
