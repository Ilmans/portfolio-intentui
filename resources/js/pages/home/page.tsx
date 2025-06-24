import AppLayout from "@/layouts/app-layout";

import { Head } from "@inertiajs/react";
import { CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import SkillSet from "./skill-set";

export default function Home() {
  return (
    <>
      <Head title="Hi, I'm Ilman S" />
      <Container className="py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <CardHeader className="text-left lg:w-1/2">
            <h2 className="text-2xl font-bold">
              Hi, I'm Ilman S{" "}
              <span className="animate-pulse text-teal-400">_</span>{" "}
            </h2>
            <p className="text-muted-fg">5+ years of experience</p>
            <p className="text-muted-fg">
              A self-taught web developer who enjoys turning ideas into code.
              I’m passionate about learning new things, reading books, and
              exploring how technology can solve real problems. Always curious,
              always improving — and always ready to build something awesome.
            </p>
          </CardHeader>

          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border">
            <img
              src="/myphoto.jpeg"
              loading="lazy"
              alt="Ilman S"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
      <SkillSet />
    </>
  );
}

Home.layout = (page: any) => <AppLayout children={page} />;
