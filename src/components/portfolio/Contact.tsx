import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, Mail, SquareCode } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Section id="contact">
      <Reveal>
        <div className="glass mx-auto max-w-2xl p-7 text-center sm:p-12">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Let's connect and learn together.
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="glass glass-hover inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 text-sm"
            >
              <Mail className="h-4 w-4 text-primary" />
              {profile.email}
            </a>
            <button
              onClick={copy}
              aria-label="Copy email address"
              className="glass glass-hover grid h-11 w-11 place-items-center rounded-full"
            >
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { href: profile.links.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: profile.links.github, label: "GitHub", Icon: Github },
              { href: profile.links.codolio, label: "Codolio", Icon: SquareCode },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass glass-hover grid h-11 w-11 place-items-center rounded-full text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            target = "_blank"
            rel="noopener noreferrer"
            className="glass glass-hover mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Download Resume <Download className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
