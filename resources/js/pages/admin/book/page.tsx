import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head, router } from "@inertiajs/react";
import { BookProps } from "@/types/book";
import { BookTable } from "./partials/book-table";

function index({ books }: BookProps) {
  return (
    <>
      <Head title="Manage articles" />
      <Container className="py-12">
        <CardHeader
          title="Manage Books"
          description="Create and manage your books here"
        ></CardHeader>
      </Container>

      <Container className="flex justify-end">
        <Button
          onClick={() => {
            router.visit(route("books.create"));
          }}
          size="small"
          intent="secondary"
        >
          Add Book
        </Button>
      </Container>

      <Container className="mt-4">
        <BookTable books={books} />
      </Container>
    </>
  );
}

export default index;
index.layout = (page: any) => <DashboardLayout children={page} />;
