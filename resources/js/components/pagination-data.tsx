import React from "react";
import { Container } from "@/components/ui/container";
import { Pagination } from "@/components/ui/pagination";
import { Link, router } from "@inertiajs/react";

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
          <Pagination.Item segment="first">
            <Link href={links[1]?.url} />
          </Pagination.Item>
          <Pagination.Item segment="previous">
            <Link href={prevPageUrl} />
          </Pagination.Item>
          {links
            .filter((link) => Number(link.label))
            .map((link, idx) => (
              <Pagination.Item key={idx} isCurrent={link.active}>
                <Link href={link.url}>{link.label}</Link>
              </Pagination.Item>
            ))}
          <Pagination.Item segment="next">
            <Link href={nextPageUrl} />
          </Pagination.Item>
          <Pagination.Item segment="last">
            <Link href={links[links.length - 2]?.url} />
          </Pagination.Item>
        </Pagination.List>
      </Pagination>
    </Container>
  );
};

export default PaginationData;
