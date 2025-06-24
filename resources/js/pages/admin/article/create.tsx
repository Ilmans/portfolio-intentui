import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";
import React from "react";
import ArticleForm from "./partials/article-form";
import { Topic } from "@/types/article";

interface CreatePageProps {
  topics: Topic[];
}
function create({ topics }: CreatePageProps) {
  return (
    <div>
      <Head title="Create Article" />
      <Container className="py-14">
        <CardHeader
          title="Create an article"
          description="Create new article to publish"
        />
      </Container>
      <Container className="lg:w-2xl">
        <ArticleForm topics={topics} />
      </Container>
    </div>
  );
}

export default create;
create.layout = (page: any) => <DashboardLayout children={page} />;
