import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";
import BookForm from "./partials/book-form";
import { Book } from "@/types/book";
interface BookFormPage {
  book: Book | null;
}

function create({ book }: BookFormPage) {
  return (
    <div>
      <Head title="Edit Book" />
      <Container className="py-14">
        <CardHeader title="Edit a project" description="Edit Book to publish" />
      </Container>
      <Container className="lg:w-2xl">
        <BookForm book={book} />
      </Container>
    </div>
  );
}

export default create;
create.layout = (page: any) => <DashboardLayout children={page} />;
