import { Quote } from "lucide-react";
import { SHOW_GUESTBOOK, testimonials } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Guestbook() {
  if (!SHOW_GUESTBOOK) return null;

  return (
    <Section id="guestbook" eyebrow="Guestbook" title="Words from people I've worked with.">
      {testimonials.length === 0 ? (
        <Reveal>
          <div className="glass border-dashed p-8 text-center text-sm text-muted-foreground">
            No testimonials yet — this space is reserved for the first ones.
          </div>
        </Reveal>
      ) : (
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <article className="glass glass-hover h-full p-6">
                <Quote className="h-5 w-5 text-primary" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
                <p className="mt-5 text-sm font-semibold tracking-tight">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
      <div className="glass flex flex-col items-center gap-2 p-6 text-center text-xs text-muted-foreground">
        <p className="text-sm font-medium tracking-tight text-foreground">Roni Albert Jaron R</p>
        <p>© {new Date().getFullYear()} — All rights reserved.</p>
        <p>Learning. Building. Growing.</p>
      </div>
    </footer>
  );
}
