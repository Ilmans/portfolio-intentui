import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import AppLayout from "@/layouts/app-layout";
import { ArticleProps } from "@/types/article";
import { Head, router } from "@inertiajs/react";
import React, { useEffect } from "react";
import ArticleList from "./article-list";
import { useLoadInitialLazyData } from "@/hooks/use-load-initial-lazydata";
import { article } from "motion/react-client";

function index({ articles }: ArticleProps) {
  return (
    <>
      <Head title="Artikel" />
      <Container className="py-16 lg:py-2">
        <CardHeader
          title="Berbagai hal yang saya tulis"
          description="Belakangan ini, menulis jadi hal menarik."
        />
      </Container>
      
      <div className="relative w-full flex justify-center my-8">
        <div className="h-[1px] w-full max-w-lg bg-neutral-300 dark:bg-neutral-700 rounded-full" />
      </div>
      <Container>
        <ArticleList articles={articles} />
      </Container>
    </>
  );
}

export default index;
index.layout = (page: any) => <AppLayout children={page} />;
