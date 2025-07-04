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
              Hai, salam kenal. Saya Ilman, orang yang suka ngulik apa saja.
              Mulai dari teknologi, ide-ide baru, sampai hal-hal kecil yang
              sering bikin penasaran. Kadang berhasil jadi karya, kadang cuma
              jadi catatan, yang terpenting, selalu ada hal baru untuk
              dipelajari.
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
