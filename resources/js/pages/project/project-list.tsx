import PaginationData from "@/components/pagination-data";
import PaginationDataLazy from "@/components/pagination-data-lazy";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { useLoadInitialLazyData } from "@/hooks/use-load-initial-lazydata";
import { ProjectProps } from "@/types/project";
import { IconBrandGithub } from "@intentui/icons";
import React from "react";
import ProjectSkeleton from "./partials/project-skeleton";

function ProjectList({ projects }: ProjectProps) {
  const { loadingData, onChangePage } = useLoadInitialLazyData(
    projects,
    "projects"
  );

  return (
    <div>
      {loadingData && <ProjectSkeleton />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects && (
          <>
            {projects.data
              .filter((project) => project.status === "publish")
              .map((project) => (
                <Card
                  key={project.id}
                  className="group p-0 border rounded-2xl overflow-hidden hover:shadow-lg transition"
                >
                  <CardHeader className="p-0">
                    <img
                    loading="lazy"
                      src={`/storage/${project.cover_url}`}
                      alt={project.name}
                      className="w-full h-30 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="px-2 ">
                    <div className="space-y-1">
                      <h2 className="text-sm  font-semibold  group-hover:underline">
                        {project.name}
                      </h2>
                      <p className="text-xs text-muted-fg">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex justify-between mt-1 ">
                      <div>
                        {project.tech_stack.split(",").map((tech, index) => (
                          <Badge
                            key={index}
                            shape="square"
                            className=" text-xs text-gray-500 dark:text-gray-400 mb-1 mr-1"
                          >
                            {tech.trim()}
                          </Badge>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${
                          project?.url && "hover:text-blue-500"
                        } transition`}
                      >
                        <IconBrandGithub />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </>
        )}
      </div>
      {projects && (
        <PaginationData
          links={projects.links}
          prevPageUrl={projects.prev_page_url}
          nextPageUrl={projects.next_page_url}
        />
      )}
    </div>
  );
}

export default ProjectList;
