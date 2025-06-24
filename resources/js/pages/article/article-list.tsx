import PaginationData from "@/components/pagination-data";
import { Container } from "@/components/ui/container";
import { Pagination } from "@/components/ui/pagination";
import { useLoadInitialLazyData } from "@/hooks/use-load-initial-lazydata";
import { ArticleProps } from "@/types/article";

function ArticleList({ articles }: ArticleProps) {
  const { loadingData, onChangePage } = useLoadInitialLazyData(
    articles,
    "articles"
  );

  return (
    <div>
      {articles && (
        <>
          <ul className="space-y-6 divide-gray-700">
            {articles.data
              ?.filter((article) => article.status === "published")
              .map((article) => (
                <li key={article.id}>
                  <a href={`/articles/${article.slug}`} className="group">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:underline">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-fg mt-1 space-x-2">
                      <span>{article.topic?.name || "Tanpa Topik"}</span>
                      <span>•</span>
                      <span>
                        {new Date(article.created_at).toLocaleDateString(
                          "id-ID",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {article.teaser}
                    </p>
                  </a>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ArticleList;
