import { Flash } from "@/components/flash";
import type { PropsWithChildren } from "react";
import { DashboardNavbar } from "./dashboard-navbar";
import { Container } from "@/components/ui/container";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Flash />
      <DashboardNavbar />
      <Container className="lg:w-2/3 lg:mx-auto">{children}</Container>
    </div>
  );
}
