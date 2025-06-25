import { Flash } from "@/components/flash";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { AppNavbar } from "@/layouts/app-navbar";
import type { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Flash />
      <AppNavbar />
      <Container className="lg:w-3/5 lg:mx-auto">
        {children}

        <Footer />
      </Container>
    </div>
  );
}
