import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";
import BookForm from "./partials/book-form";

function create() {
  return (
    <div>
      <Head title="Add Book" />
      <Container className="py-14">
        <CardHeader title="Add a book" description="Add new book to publish" />
      </Container>
      <Container className="lg:w-2xl">
        <BookForm book={null} />
      </Container>
    </div>
  );
}

export default create;
create.layout = (page: any) => <DashboardLayout children={page} />;
