import { composeTailwindRenderProps } from "@/lib/primitive"
import { twJoin } from "tailwind-merge"
import { Container } from "@/components/ui/container"
import { ListBox, ListBoxItem, type ListBoxItemProps } from "react-aria-components"

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container className="py-6 sm:py-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:gap-16">
          <div className="w-full shrink-0 md:w-56">
            <ListBox selectionMode="single">
              <NavLink href="/settings/profile" isCurrent={route().current("profile.edit")}>
                Profile
              </NavLink>
              <NavLink href="/settings/password" isCurrent={route().current("password.edit")}>
                Change password
              </NavLink>
              <NavLink
                href="/settings/appearance"
                isCurrent={route().current("settings.appearance")}
              >
                Appearance
              </NavLink>
              <NavLink
                href="/settings/delete-account"
                isCurrent={route().current("settings.delete-account")}
              >
                Danger zone
              </NavLink>
            </ListBox>
          </div>
          <div className="w-full min-w-0">{children}</div>
        </div>
      </Container>
    </>
  )
}

interface NavLinkProps extends ListBoxItemProps {
  isCurrent?: boolean
}
export function NavLink({ isCurrent, className, ...props }: NavLinkProps) {
  return (
    <ListBoxItem
      href="#"
      className={composeTailwindRenderProps(
        className,
        twJoin(
          "block py-2 text-sm",
          isCurrent ? "font-semibold text-fg" : "text-muted-fg hover:text-fg",
        ),
      )}
      {...props}
    />
  )
}
