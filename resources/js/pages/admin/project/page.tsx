import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head, router } from "@inertiajs/react";
import React from "react";
import { ProjectProps } from "@/types/project";
import { ProjectTable } from "./partials/projects-table";

function index({ projects }: ProjectProps) {
  return (
    <>
      <Head title="Manage articles" />
      <Container className="py-12">
        <CardHeader
          title="Manage Projects"
          description="Create and manage your projects here"
        ></CardHeader>
      </Container>

      <Container className="flex justify-end">
        <Button
          onClick={() => {
            router.visit(route("projects.create"));
          }}
          size="small"
          intent="secondary"
        >
          Add Project
        </Button>
      </Container>

      <Container className="mt-4">
        <ProjectTable projects={projects} />
      </Container>
    </>
  );
}

export default index;
index.layout = (page: any) => <DashboardLayout children={page} />;
