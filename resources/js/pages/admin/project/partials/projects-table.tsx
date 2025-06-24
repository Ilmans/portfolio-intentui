"use client";
import PaginationData from "@/components/pagination-data";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Menu } from "@/components/ui/menu";
import { Table } from "@/components/ui/table";
import { ProjectProps } from "@/types/project";
import { router } from "@inertiajs/react";
import { IconDotsVertical } from "@intentui/icons";

export function ProjectTable({ projects }: ProjectProps) {
  return (
    <>
      <Table aria-label="Projects">
        <Table.Header>
          <Table.Column>#</Table.Column>
          <Table.Column>Image</Table.Column>
          <Table.Column isRowHeader>Name</Table.Column>
          <Table.Column>Tech Stack</Table.Column>
          <Table.Column>Status</Table.Column>
          <Table.Column>Created At</Table.Column>
          <Table.Column />
        </Table.Header>
        <Table.Body items={projects.data}>
          {(item) => (
            <Table.Row href="#" id={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>
                {item.cover_url ? (
                  <img
                    src={`/storage/${item.cover_url}`}
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded"
                  />
                ) : (
                  <span>No Image</span>
                )}
              </Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.tech_stack}</Table.Cell>
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
                      <Menu.Item href={route("projects.edit", { id: item.id })}>
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
                            router.delete(route("projects.destroy", item.id));
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
          links={projects.links}
          nextPageUrl={projects.next_page_url}
          prevPageUrl={projects.prev_page_url}
        />
      </Container>
    </>
  );
}
