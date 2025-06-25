import { Link, usePage } from "@inertiajs/react";
import {
  IconBrandIntentui,
  IconChevronLgDown,
  IconLogout,
  IconSidebarFill,
} from "@intentui/icons";
import { useEffect, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { buttonStyles } from "@/components/ui/button";
import { Menu } from "@/components/ui/menu";
import { Navbar } from "@/components/ui/navbar";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";
import type { SharedData } from "@/types/shared";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navigations = [
  {
    name: "About",
    textValue: "about",
    href: "/",
  },
  {
    name: "Projects",
    textValue: "projects",
    href: "/projects",
  },
  {
    name: "Articles",
    textValue: "articles",
    href: "/articles",
  },
  {
    name: "Books",
    textValue: "books",
    href: "/books",
  },
];

export function AppNavbar({
  children,
  ...props
}: React.ComponentProps<typeof Navbar>) {
  const page = usePage();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => setIsOpen(false), [page.url]);

  function isCurrentRoute(
    pageUrl: string | undefined,
    itemHref: string
  ): boolean {
    if (!pageUrl) return false;
    if (itemHref === "/") {
      return pageUrl === "/";
    }

    return (
      pageUrl === itemHref ||
      pageUrl.startsWith(itemHref + "?") ||
      pageUrl.startsWith(itemHref + "/")
    );
  }
  return (
    <Navbar
      className="lg:w-1/2 lg:mx-auto  lg:py-14 border-0 ring-0"
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      {...props}
    >
      <Navbar.Nav className="bg-transparent border-0">
        <div className="lg:w-full lg:flex lg:justify-center">
          <Navbar.Logo className="hidden md:block" aria-label="Logo">
            <ThemeSwitcher />
          </Navbar.Logo>
          <Navbar.Section className="mt-12 md:mt-0">
            {navigations.map((item) => (
              <Navbar.Item
                className="font-semibold"
                isCurrent={isCurrentRoute(page.url, item.href)}
                key={item.href}
              >
                <Link href={item.href}>{item.name}</Link>
              </Navbar.Item>
            ))}
          </Navbar.Section>
        </div>

        {/* <Navbar.Section className="ml-auto hidden gap-x-2 lg:flex">
          {auth.user ? (
            <UserMenu />
          ) : (
            <Navbar.Item href="/login">Login</Navbar.Item>
          )}
        </Navbar.Section> */}
      </Navbar.Nav>

      <Navbar.Compact className="bg-transparent border-0 ring-0">
        <Navbar.Flex className="w-1/3">
          <Navbar.Trigger />
        </Navbar.Flex>
        <Navbar.Flex className="w-2/3">
          <Navbar.Logo
            className={"text-center font-bold text-2xl"}
            aria-label="Logo"
          >
            <p>Ilman'S</p>
            <ThemeSwitcher />
          </Navbar.Logo>
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
