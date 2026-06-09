

interface InteriorProjectsSkeletonProps {
  count?: number;
}

export default function InteriorProjectsSkeleton({ count = 6  }: InteriorProjectsSkeletonProps) {
  return (
    <div className="mb-20 flex flex-col w-full items-center justify-center mt-28 px-4">
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {Array.from({ length: count as number}).map((_, index) => (
              <div
                key={index}
                className="flex items-start gap-4 w-full"
              >
                {/* Image Skeleton */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 overflow-hidden bg-neutral-200 animate-pulse rounded-sm" />

                {/* Content Skeleton */}
                <div className="flex flex-col justify-between h-28 sm:h-32 py-1 font-sans flex-1">
                  {/* Title Skeleton (Simulating 2 lines of text) */}
                  <div className="space-y-2 mt-1">
                    <div className="h-4 bg-neutral-200 animate-pulse rounded-sm w-11/12" />
                    <div className="h-4 bg-neutral-200 animate-pulse rounded-sm w-3/4" />
                  </div>

                  {/* "Read More" Link Skeleton */}
                  <div className="mb-1">
                    <div className="h-3 bg-neutral-200 animate-pulse rounded-sm w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}