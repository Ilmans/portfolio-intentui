import PaginationDataLazy from "@/components/pagination-data-lazy";
import { useLoadInitialLazyData } from "@/hooks/use-load-initial-lazydata";
import { ArticleProps } from "@/types/article";
import SkeletonArticles from "./partials/skeleton-article";
import PaginationData from "@/components/pagination-data";

function ArticleList({ articles }: ArticleProps) {
  const { loadingData, onChangePage } = useLoadInitialLazyData(
    articles,
    "articles"
  );

  return (
    <div>
      {loadingData && <SkeletonArticles />}
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

      {articles && (
        <PaginationData
          links={articles.links}
          prevPageUrl={articles.prev_page_url}
          nextPageUrl={articles.next_page_url}
        />
      )}
    </div>
  );
}

export default ArticleList;
