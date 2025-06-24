"use client";
import PaginationData from "@/components/pagination-data";
import { Container } from "@/components/ui/container";
import { Menu } from "@/components/ui/menu";
import { Table } from "@/components/ui/table";
import { BookProps } from "@/types/book"; // pastikan ada tipe BookProps
import { router } from "@inertiajs/react";
import { IconDotsVertical } from "@intentui/icons";

export function BookTable({ books }: BookProps) {
  return (
    <>
      <Table aria-label="Books">
        <Table.Header>
          <Table.Column>#</Table.Column>
          <Table.Column>Image</Table.Column>
          <Table.Column isRowHeader>Title</Table.Column>
          <Table.Column>About</Table.Column>
          <Table.Column>URL</Table.Column>
          <Table.Column>Created At</Table.Column>
          <Table.Column />
        </Table.Header>
        <Table.Body items={books.data}>
          {(item) => (
            <Table.Row href="#" id={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>
                {item.cover_url ? (
                  <img
                    src={`/storage/${item.cover_url}`}
                    alt={item.title}
                    className="h-12 w-12 object-cover rounded"
                  />
                ) : (
                  <span>No Image</span>
                )}
              </Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.about}</Table.Cell>
              <Table.Cell>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Link
                </a>
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
                      <Menu.Item href={route("books.edit", { id: item.id })}>
                        Edit
                      </Menu.Item>
                      <Menu.Separator />
                      <Menu.Item
                        onAction={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this item?"
                            )
                          ) {
                            router.delete(route("books.destroy", item.id));
                          }
                        }}
                        isDanger={true}
                      >
                        Delete
                      </Menu.Item>
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
          links={books.links}
          nextPageUrl={books.next_page_url}
          prevPageUrl={books.prev_page_url}
        />
      </Container>
    </>
  );
}
