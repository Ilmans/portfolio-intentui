export interface Book {
  id: number;
  title: string;
  about: string;
  cover_url: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export type BookFormValues = {
  title: string;
  about: string;
  url: string | null;
  cover_url: FileList | null;
};

export interface BookProps {
  books: {
    data: Book[];
    current_page: number;
    last_page: number;
    next_page_url: string | undefined;
    prev_page_url: string | undefined;
    links: { url: string | undefined; label: string; active: boolean }[];
  };
}
