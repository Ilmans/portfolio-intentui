export interface Project {
  id: number;
  name: string;
  description: string;
  tech_stack: string;
  cover_url: string;
  url: string | null;
  status: "publish" | "draft";
  created_at: string;
  updated_at: string;
}

export type ProjectFormValues = {
  name: string;
  description: string;
  tech_stack: string;
  url: string | null;
  status: string;
  cover_url: FileList | null;
};

export interface ProjectProps {
  projects: {
    data: Project[];
    current_page: number;
    last_page: number;
    next_page_url: string | undefined;
    prev_page_url: string | undefined;
    links: { url: string | undefined; label: string; active: boolean }[];
  };
}

export const STATUSPROJECT = [{ name: "publish" }, { name: "draft" }];
