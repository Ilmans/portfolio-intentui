import React from "react";
import { Container } from "@/components/ui/container";
import { Pagination } from "@/components/ui/pagination";

interface PaginationDataProps {
  nextPageUrl: string | undefined;
  prevPageUrl: string | undefined;
  links: { url: string | undefined; label: string; active: boolean }[];
  goToPage: (url: string | undefined) => void; // Tambahkan goToPage
}

const PaginationDataLazy: React.FC<PaginationDataProps> = ({
  nextPageUrl,
  prevPageUrl,
  links,
  goToPage,
}) => {
  return (
    <Container className="mt-8">
      <Pagination>
        <Pagination.List>
          <Pagination.Item
            segment="first"
            onAction={() => goToPage(links[1]?.url)}
          />
          <Pagination.Item
            segment="previous"
            onAction={() => goToPage(prevPageUrl)}
          />
          {links
            .filter((link) => Number(link.label)) // hanya nomor halaman
            .map((link, idx) => (
              <Pagination.Item
                key={idx}
                isCurrent={link.active}
                onAction={() => goToPage(link.url)}
              >
                {link.label}
              </Pagination.Item>
            ))}
          <Pagination.Item
            segment="next"
            onAction={() => goToPage(nextPageUrl)}
          />
          <Pagination.Item
            segment="last"
            onAction={() => goToPage(links[links.length - 2]?.url)}
          />
        </Pagination.List>
      </Pagination>
    </Container>
  );
};

export default PaginationDataLazy;
