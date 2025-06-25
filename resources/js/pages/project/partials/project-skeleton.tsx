"use client";

import { Card } from "@/components/ui/card";
import { CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Card
          key={idx}
          className="group p-0 border rounded-2xl overflow-hidden"
        >
          <CardHeader className="p-0">
            <Skeleton className="w-full h-30" />
          </CardHeader>
          <CardContent className="px-2 space-y-2">
            <Skeleton className="h-4 w-3/4" /> {/* Project name */}
            <Skeleton className="h-3 w-full" /> {/* Description */}
            <div className="flex justify-between mt-1">
              <div className="flex gap-1 flex-wrap">
                <Skeleton className="h-3 w-10" />
                <Skeleton className="h-3 w-8" />
                <Skeleton className="h-3 w-12" />
              </div>
              <Skeleton className="h-4 w-4" /> {/* Github icon placeholder */}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
