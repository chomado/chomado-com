import { ExternalLink } from "lucide-react";

// Brand SVG icons (lucide-react doesn't include brand icons)
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://twitter.com/chomado",
    icon: XIcon,
    color: "hover:text-black dark:hover:text-white",
  },
  {
    label: "GitHub",
    href: "https://github.com/chomado",
    icon: GitHubIcon,
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chomado",
    icon: LinkedInIcon,
    color: "hover:text-[#0A66C2]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@chomado",
    icon: YouTubeIcon,
    color: "hover:text-[#FF0000]",
  },
];

const writingLinks = [
  {
    label: "Qiita",
    href: "https://qiita.com/chomado",
    color: "bg-[#55C500]/10 text-[#55C500] border-[#55C500]/20 hover:bg-[#55C500]/20",
  },
  {
    label: "Zenn",
    href: "https://zenn.dev/chomado",
    color: "bg-[#3EA8FF]/10 text-[#3EA8FF] border-[#3EA8FF]/20 hover:bg-[#3EA8FF]/20",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#0078d4]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:text-left sm:items-start sm:gap-10">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-[#0078d4]/20 blur-xl scale-110" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/3405269?v=4"
              alt="ちょまど"
              width={120}
              height={120}
              className="relative rounded-full border-2 border-[#0078d4]/30 shadow-xl"
            />
          </div>

          {/* Profile text */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                ちょまど
                <span className="ml-2 text-xl font-normal text-muted-foreground">
                  Madoka Chiyoda
                </span>
              </h1>
              <p className="mt-2 text-base font-medium text-[#0078d4]">
                Cloud Developer Advocate @ Microsoft
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg">
              マイクロソフトで Cloud Developer Advocate として働くITエンジニア 👩‍💻{" "}
              一児の母 👶{" "}
              AI・クラウド・開発者ツールを中心に登壇・執筆活動中。
              技術を楽しく伝えることが好きです。
            </p>

            {/* SNS Icons */}
            <div className="flex flex-wrap items-center gap-1">
              {socialLinks.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center justify-center rounded-lg p-2.5 text-muted-foreground transition-all duration-200 hover:bg-muted ${color}`}
                >
                  <Icon size={20} />
                </a>
              ))}

              {/* Divider */}
              <span className="mx-1 h-5 w-px bg-border" />

              {/* Writing links */}
              {writingLinks.map(({ label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-200 ${color}`}
                >
                  {label}
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>

            {/* Linktree */}
            <a
              href="https://linktr.ee/chomado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={13} />
              linktr.ee/chomado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
