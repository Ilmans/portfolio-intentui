import { usePage } from "@inertiajs/react";
import {
  IconBrandIntentui,
  IconChevronLgDown,
  IconLogout,
} from "@intentui/icons";
import { useEffect, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { buttonStyles } from "@/components/ui/button";
import { Menu } from "@/components/ui/menu";
import { Navbar } from "@/components/ui/navbar";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";
import type { SharedData } from "@/types/shared";

const navigations = [
  {
    name: "Dashboard",
    textValue: "dashboard",
    href: "/dashboard",
  },
  {
    name: "Articles",
    textValue: "articles",
    href: "/admin/articles",
  },
  {
    name: "Projects",
    textValue: "projects",
    href: "/admin/projects",
  },
  {
    name: "Books",
    textValue: "books",
    href: "/admin/books",
  },
];

export function DashboardNavbar({
  children,
  ...props
}: React.ComponentProps<typeof Navbar>) {
  const page = usePage();
  const { auth } = usePage<SharedData>().props;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => setIsOpen(false), [page.url]);
  return (
    <Navbar isOpen={isOpen} onOpenChange={setIsOpen} {...props}>
      <Navbar.Nav>
        <Navbar.Logo aria-label="Logo">
          <Logo />
        </Navbar.Logo>
        <Navbar.Section>
          {navigations.map((item) => (
            <Navbar.Item
              isCurrent={item.href === page.url}
              key={item.href}
              href={item.href}
            >
              {item.name}
            </Navbar.Item>
          ))}
        </Navbar.Section>

        <Navbar.Section className="ml-auto hidden gap-x-2 lg:flex">
          {auth.user ? (
            <UserMenu />
          ) : (
            <Navbar.Item href="/login">Login</Navbar.Item>
          )}
        </Navbar.Section>
      </Navbar.Nav>

      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger />
          <Separator className="h-6" orientation="vertical" />
          <Navbar.Logo aria-label="Logo">
            <Logo />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex className="gap-x-1">
          {auth.user ? (
            <UserMenu />
          ) : (
            <Navbar.Item
              className={buttonStyles({
                intent: "outline",
                size: "small",
              })}
              href="/login"
            >
              Login
            </Navbar.Item>
          )}
        </Navbar.Flex>
      </Navbar.Compact>

      {children}
    </Navbar>
  );
}

function UserMenu() {
  const { auth } = usePage<SharedData>().props;
  return (
    <Menu>
      <Menu.Trigger
        className="group flex items-start justify-between rounded-lg p-1 text-left data-hovered:bg-secondary"
        aria-label="Open menu"
      >
        <Avatar
          src={auth.user.gravatar}
          shape="square"
          className="mr-2 size-7 *:size-7 sm:size-9 sm:*:size-9"
        />
        <div className="hidden flex-col pr-2 sm:flex">
          <strong className="font-semibold text-sm">{auth.user.name}</strong>
          <span className="text-xs">{auth.user.email}</span>
        </div>
        <IconChevronLgDown className="transition-transform group-data-pressed:rotate-180" />
      </Menu.Trigger>
      <Menu.Content placement="bottom end" className="sm:min-w-56">
        <Menu.Section>
          <Menu.Header separator className="relative">
            <div>{auth.user.name}</div>
            <div className="truncate whitespace-nowrap pr-6 font-normal text-muted-fg text-sm">
              {auth.user.email}
            </div>
          </Menu.Header>
        </Menu.Section>
        <Menu.Item href="/dashboard">
          <Menu.Label>Dashboard</Menu.Label>
        </Menu.Item>
        <Menu.Item href="/settings/profile" className="justify-between">
          <Menu.Label>Update profile</Menu.Label>
        </Menu.Item>
        <Menu.Item href="/settings/password" className="justify-between">
          <Menu.Label>Change password</Menu.Label>
        </Menu.Item>
        <Menu.Item href="/settings/appearance" className="justify-between">
          <Menu.Label>Appearance</Menu.Label>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item routerOptions={{ method: "post" }} href="/logout">
          <Menu.Label>Logout</Menu.Label>
          <IconLogout />
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
