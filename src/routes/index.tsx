import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dennis Mwangi — Developer & Designer" },
      {
        name: "description",
        content:
          "Dennis Mwangi builds thoughtful, fast digital products. Explore selected projects.",
      },
      { property: "og:title", content: "Dennis Mwangi — Developer & Designer" },
      {
        property: "og:description",
        content: "Thoughtful, fast digital products crafted in Nairobi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="bg-glow animate-drift pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] rounded-full blur-3xl"
      />

      <section className="relative z-10 mx-auto max-w-4xl text-center">
        <p
          className="animate-rise mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Nairobi, Kenya
        </p>

        <h1
          className="animate-rise font-display text-6xl leading-[0.95] tracking-tight text-foreground sm:text-8xl md:text-9xl"
          style={{ animationDelay: "0.15s" }}
        >
          Dennis <em className="text-ember italic">Mwangi</em>
        </h1>

        <p
          className="animate-rise mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          style={{ animationDelay: "0.3s" }}
        >
          Developer &amp; designer crafting thoughtful, fast digital products — from first
          sketch to shipped code.
        </p>

        <div className="animate-rise mt-12" style={{ animationDelay: "0.45s" }}>
          <Button variant="hero" size="xl" className="group">
            View My Projects
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </main>
  );
}
