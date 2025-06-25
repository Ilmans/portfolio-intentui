import PaginationData from "@/components/pagination-data";
import { useLoadInitialLazyData } from "@/hooks/use-load-initial-lazydata";
import { BookProps } from "@/types/book";
import React from "react";
import ProjectSkeleton from "../project/partials/project-skeleton";

function BookList({ books }: BookProps) {
  const { loadingData, onChangePage } = useLoadInitialLazyData(books, "books");

  return (
    <div>
      {loadingData && <ProjectSkeleton />}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books &&
          books.data.map((book) => (
            <div
              key={book.id}
              className={`rounded-lg border bg-white dark:bg-gray-900 overflow-hidden shadow-sm hover:shadow-md transition relative ${
                book.status === "progress"
                  ? "opacity-50 pointer-events-none"
                  : ""
              }`}
            >
              <div className="w-full aspect-[2/3] bg-gray-100">
                <img
                  src={book.cover_url}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 space-y-1">
                <div className="font-medium text-sm truncate">{book.title}</div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{book.pages} pages</span>
                  {book.url && (
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Read
                    </a>
                  )}
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
                  <span
                    className={`px-1.5 py-0.5 rounded ${
                      book.status === "published"
                        ? "bg-green-100 text-green-600"
                        : book.status === "draft"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {book.status}
                  </span>
                  <span>{new Date(book.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {books && (
        <PaginationData
          links={books.links}
          prevPageUrl={books.prev_page_url}
          nextPageUrl={books.next_page_url}
        />
      )}
    </div>
  );
}

export default BookList;
