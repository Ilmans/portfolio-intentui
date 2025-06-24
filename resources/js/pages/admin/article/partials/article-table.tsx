"use client";
import PaginationData from "@/components/pagination-data";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Menu } from "@/components/ui/menu";
import { Pagination } from "@/components/ui/pagination";
import { Table } from "@/components/ui/table";
import { Article, ArticleProps } from "@/types/article";
import { IconDotsVertical } from "@intentui/icons";

export function ArticleTable({ articles }: ArticleProps) {
  return (
    <>
      <Table aria-label="Products">
        <Table.Header>
          <Table.Column>#</Table.Column>
          <Table.Column isRowHeader>Title</Table.Column>
          <Table.Column>Topic</Table.Column>
          <Table.Column>Status</Table.Column>
          <Table.Column>Created At</Table.Column>
          <Table.Column />
        </Table.Header>
        <Table.Body items={articles.data}>
          {(item) => (
            <Table.Row href="#" id={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.topic?.name}</Table.Cell>
              <Table.Cell>
                <Badge
                  intent={item.status === "draft" ? "secondary" : "primary"}
                >
                  {item.status}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                {new Date(item.created_at).toLocaleString()}
              </Table.Cell>
              <Table.Cell>
                <div className="flex justify-end">
                  <Menu>
                    <Menu.Trigger className="size-6">
                      <IconDotsVertical />
                    </Menu.Trigger>
                    <Menu.Content aria-label="Actions" placement="left top">
                      <Menu.Item>View</Menu.Item>
                      <Menu.Item href={route("articles.edit", { id: item.id })}>
                        Edit
                      </Menu.Item>
                      <Menu.Separator />
                      <Menu.Item isDanger>Delete</Menu.Item>
                    </Menu.Content>
                  </Menu>
                </div>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <Container className="mt-8">
        <PaginationData
          links={articles.links}
          nextPageUrl={articles.next_page_url}
          prevPageUrl={articles.prev_page_url}
        />
      </Container>
    </>
  );
}
