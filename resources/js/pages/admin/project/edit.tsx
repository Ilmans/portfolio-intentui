import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";

import ProjectForm from "./partials/project-form";
import { Project, ProjectProps } from "@/types/project";
interface ProjectFormProps {
  project: Project | null;
}

function create({ project }: ProjectFormProps) {
  return (
    <div>
      <Head title="Edit Project" />
      <Container className="py-14">
        <CardHeader
          title="Edit a project"
          description="Edit  project to publish"
        />
      </Container>
      <Container className="lg:w-2xl">
        <ProjectForm project={project} />
      </Container>
    </div>
  );
}

export default create;
create.layout = (page: any) => <DashboardLayout children={page} />;
