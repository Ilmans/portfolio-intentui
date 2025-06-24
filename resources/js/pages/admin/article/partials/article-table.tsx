"use client";
import { Badge } from "@/components/ui/badge";
import { Menu } from "@/components/ui/menu";
import { Table } from "@/components/ui/table";
import { Article } from "@/types/article";
import { IconDotsVertical } from "@intentui/icons";
import { NumberFormatter } from "@internationalized/number";

interface PageProps {
  articles: {
    data: Article[];
  };
}

export function ArticleTable({ articles }: PageProps) {
  console.log(articles);
  return (
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
          <Table.Row href="d" id={item.id}>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.topic?.name}</Table.Cell>
            <Table.Cell>
              <Badge intent={item.status === "draft" ? "secondary" : "primary"}>
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
                    <Menu.Item>Edit</Menu.Item>
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
  );
}

export const products = [
  {
    id: "1",
    name: "iPhone 13",
    category: "Electronics",
    price: 799,
    brand: "Apple",
    stock: 150,
  },
  {
    id: "2",
    name: "Galaxy S21",
    category: "Electronics",
    price: 699,
    brand: "Samsung",
    stock: 200,
  },
  {
    id: "3",
    name: "MacBook Pro",
    category: "Computers",
    price: 1299,
    brand: "Apple",
    stock: 80,
  },
  {
    id: "4",
    name: "Dell XPS 13",
    category: "Computers",
    price: 999,
    brand: "Dell",
    stock: 50,
  },
  {
    id: "5",
    name: "Sony WH-1000XM4",
    category: "Headphones",
    price: 349,
    brand: "Sony",
    stock: 120,
  },
  {
    id: "6",
    name: "AirPods Pro",
    category: "Headphones",
    price: 249,
    brand: "Apple",
    stock: 180,
  },
  {
    id: "7",
    name: "Fitbit Charge 5",
    category: "Wearables",
    price: 179,
    brand: "Fitbit",
    stock: 75,
  },
];
