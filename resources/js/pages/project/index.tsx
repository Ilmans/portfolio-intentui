import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import AppLayout from "@/layouts/app-layout";
import { ProjectProps } from "@/types/project";
import { Head, router } from "@inertiajs/react";
import ProjectList from "./project-list";

function index({ projects }: ProjectProps) {
  return (
    <>
      <Head title="Proyek" />
      <Container className="py-16 lg:py-2">
        <CardHeader
          title="Berbagai hal yang sudah saya buat"
          description="Kadang dari freelance, kadang iseng-iseng, kadang juga project sendiri seperti m-pedia.co.id , interaksi.live dan boostifyhub.id, tapi hanya beberapa saja yang ingin saya tampilkan."
        />
      </Container>

      <div className="relative w-full flex justify-center my-8">
        <div className="h-[1px] w-full max-w-lg bg-neutral-300 dark:bg-neutral-700 rounded-full" />
      </div>
      <Container>
        <ProjectList projects={projects} />
      </Container>
    </>
  );
}

export default index;
index.layout = (page: any) => <AppLayout children={page} />;
