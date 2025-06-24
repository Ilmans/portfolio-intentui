import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";
import React from "react";
import ArticleForm from "./partials/article-form";
import { Article, Topic } from "@/types/article";

interface CreatePageProps {
  topics: Topic[];
  article: Article;
}
function edit({ topics, article }: CreatePageProps) {
  return (
    <div>
      <Head title="Create Article" />
      <Container className="py-14">
        <CardHeader
          title="Edit an article"
          description="Edit current article"
        />
      </Container>
      <Container className="lg:w-2xl">
        <ArticleForm article={article} topics={topics} />
      </Container>
    </div>
  );
}

export default edit;
edit.layout = (page: any) => <DashboardLayout children={page} />;
