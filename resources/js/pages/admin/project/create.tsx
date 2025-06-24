import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";

import ProjectForm from "./partials/project-form";

function create() {
  return (
    <div>
      <Head title="Create Project" />
      <Container className="py-14">
        <CardHeader
          title="Create a project"
          description="Create new project to publish"
        />
      </Container>
      <Container className="lg:w-2xl">
        <ProjectForm project={null} />
      </Container>
    </div>
  );
}

export default create;
create.layout = (page: any) => <DashboardLayout children={page} />;
