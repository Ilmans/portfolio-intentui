import { Flash } from "@/components/flash";
import type { PropsWithChildren } from "react";
import { DashboardNavbar } from "./dashboard-navbar";


export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Flash />
      <DashboardNavbar />

      {children}
    </div>
  );
}
