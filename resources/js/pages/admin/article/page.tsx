import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head, router } from "@inertiajs/react";
import React from "react";
import { ArticleTable } from "./partials/article-table";
import { Article } from "@/types/article";

interface PageProps {
  articles: {
    data: Article[];
  };
}
function index({ articles }: PageProps) {
  return (
    <>
      <Head title="Manage articles" />
      <Container className="py-12">
        <CardHeader
          title="Manage articles"
          description="Create and manage your articles here"
        ></CardHeader>
      </Container>

      <Container className="flex justify-end">
        <Button
          onClick={() => {
            router.visit(route("articles.create"));
          }}
          size="small"
          intent="secondary"
        >
          Create Article
        </Button>
      </Container>

      <Container className="mt-4">
        <ArticleTable articles={articles} />
      </Container>
    </>
  );
}

export default index;
index.layout = (page: any) => <DashboardLayout children={page} />;
