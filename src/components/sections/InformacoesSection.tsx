import {
  Apple,
  Baby,
  Clock,
  HeartHandshake,
  MapPin,
  Phone,
  Sun,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const iconByLabel: Record<string, LucideIcon> = {
  "Faixa etária": Baby,
  Horário: Clock,
  Período: Sun,
  Endereço: MapPin,
  Alimentação: Apple,
  Adaptação: HeartHandshake,
  Contato: Phone,
};

export function InformacoesSection() {
  const { informacoes } = siteContent;

  return (
    <section
      id="informacoes"
      className="bg-cream py-16 md:py-24"
      aria-labelledby="informacoes-title"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="informacoes-title"
            className="font-display text-3xl font-bold text-olive-deep sm:text-4xl"
          >
            {informacoes.title}
          </h2>
          <p className="mt-3 text-text-muted">
            Clareza para as famílias — tudo o que você precisa saber.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {informacoes.items.map((item, index) => {
            const Icon = iconByLabel[item.label] ?? MapPin;
            const isPhone = item.label === "Contato";

            return (
              <FadeIn key={item.label} delay={index * 0.04}>
                <li className="group rounded-3xl bg-card p-7 text-center shadow-sm ring-1 ring-border/70 transition-shadow duration-300 hover:shadow-md">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-sun/35 text-cinnamon transition duration-300 group-hover:scale-110 group-hover:bg-sun/50">
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-olive-deep">
                    {item.label}
                  </h3>
                  {isPhone ? (
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="mt-1 block text-text-muted underline-offset-4 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-text-muted">{item.value}</p>
                  )}
                </li>
              </FadeIn>
            );
          })}
        </ul>

        <FadeIn>
          <div className="mt-10 flex flex-col items-center gap-3 rounded-3xl bg-sky/25 px-6 py-8 text-center">
            <MapPin className="h-7 w-7 text-cinnamon" aria-hidden />
            <p className="font-display text-2xl font-semibold text-olive-deep">
              {informacoes.items.find((i) => i.label === "Endereço")?.value}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
