import React from "react";
import { Container } from "@/components/ui/container";
import { Pagination } from "@/components/ui/pagination";
import { router } from "@inertiajs/react";

interface PaginationDataProps {
  nextPageUrl: string | undefined;
  prevPageUrl: string | undefined;
  links: { url: string | undefined; label: string; active: boolean }[];
}

const PaginationData: React.FC<PaginationDataProps> = ({
  nextPageUrl,
  prevPageUrl,
  links,
}) => {
  return (
    <Container className="mt-8">
      <Pagination>
        <Pagination.List>
          <Pagination.Item segment="first" href={links[1]?.url} />
          <Pagination.Item segment="previous" href={prevPageUrl} />
          {links
            .filter((link) => Number(link.label)) // hanya nomor page
            .map((link, idx) => (
              <Pagination.Item
                key={idx}
                isCurrent={link.active}
                href={link.url}
              >
                {link.label}
              </Pagination.Item>
            ))}
          <Pagination.Item segment="next" href={nextPageUrl} />
          <Pagination.Item segment="last" href={links[links.length - 2]?.url} />
        </Pagination.List>
      </Pagination>
    </Container>
  );
};

export default PaginationData;
