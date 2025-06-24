export interface Topic {
  id: number;
  name: string;
}
export interface Article {
  id: number;
  topic_id: number;
  title: string;
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

export const STATUSARTICLE = [
  {
    name: "published",
  },
  {
    name: "draft",
  },
];
