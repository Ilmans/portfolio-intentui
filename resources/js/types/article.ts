export interface Topic {
  id: number;
  name: string;
}
export interface Article {
  id: number;
  topic_id: number;
  title: string;
  teaser: string;
  slug: string;
  content: string;
  status: string;
  created_at: string;
  updated_at: string;
  topic: Topic | null;
}

export interface Topic {
  id: number;
  name: string;
}

export interface ArticleProps {
  articles: {
    data: Article[];
    next_page_url: string | undefined;
    prev_page_url: string | undefined;
    links: { url: string | undefined; label: string; active: boolean }[];
  };
}

export const STATUSARTICLE = [
  {
    name: "published",
  },
  {
    name: "draft",
  },
];
