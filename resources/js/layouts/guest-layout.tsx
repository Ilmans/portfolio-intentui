import { Flash } from "@/components/flash"
import { Logo } from "@/components/logo"
import { Card } from "@/components/ui/card"
import type { PropsWithChildren, ReactNode } from "react"
import { Link } from "@/components/ui/link"

interface GuestLayoutProps {
  header?: string | null
  description?: string | ReactNode | null
}

export default function GuestLayout({
  description = null,
  header = null,
  children,
}: PropsWithChildren<GuestLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 pt-6 sm:justify-center sm:pt-0">
      <Flash />
      {/* <Link href="/">
        <Logo className="size-10" />
      </Link> */}

      <div className="mt-6 w-full max-w-sm">
        <Card.Header className="text-center">
          <Card.Title>{header}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Header>
        <Card.Content>{children}</Card.Content>
      </div>
    </div>
  )
}
