import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import AppLayout from "@/layouts/app-layout";
import { Head, router } from "@inertiajs/react";
import { BookProps } from "@/types/book";
import BookList from "./book-list";

function index({ books }: BookProps) {
  return (
    <>
      <Head title="Buku" />
      <Container className="py-16 lg:py-2">
        <CardHeader
          title="Belajar menulis buku"
          description="Belajar menulis buku juga hal menarik."
        />
      </Container>

      <div className="relative w-full flex justify-center my-8">
        <div className="h-[1px] w-full max-w-lg bg-neutral-300 dark:bg-neutral-700 rounded-full" />
      </div>
      <Container>
        <BookList books={books} />
      </Container>
    </>
  );
}

export default index;
index.layout = (page: any) => <AppLayout children={page} />;
