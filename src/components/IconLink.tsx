import { ArrowUpRight, Bot, Code2, FileText, Mail, type LucideIcon } from 'lucide-react';
import type { ReactElement, SVGProps } from 'react';

type IconName = 'github' | 'scholar' | 'huggingface' | 'linkedin' | 'email' | 'paper' | 'code' | 'external';
type IconComponent = LucideIcon | ((props: SVGProps<SVGSVGElement>) => ReactElement);

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function GoogleScholarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3 2.75 10.25 12 17.5l9.25-7.25L12 3Z" fill="currentColor" opacity="0.92" />
      <path d="M7.6 13.2v2.15c0 1.88 1.97 3.4 4.4 3.4s4.4-1.52 4.4-3.4V13.2L12 16.65 7.6 13.2Z" fill="currentColor" />
      <path d="M19.25 11.8v4.45" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.98H3.75V20h3.19V8.98ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.68c0-3.3-1.76-4.84-4.12-4.84a3.55 3.55 0 0 0-3.2 1.76h-.04V8.98H9.84V20h3.18v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.79 1.65 1.79 2.92V20h3.19l.2-6.32Z" />
    </svg>
  );
}

const icons: Record<IconName, IconComponent> = {
  github: GitHubIcon,
  scholar: GoogleScholarIcon,
  huggingface: Bot,
  linkedin: LinkedInIcon,
  email: Mail,
  paper: FileText,
  code: Code2,
  external: ArrowUpRight,
};

interface Props {
  href: string;
  label: string;
  icon: IconName;
}

export default function IconLink({ href, label, icon }: Props) {
  const Icon = icons[icon];
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white/60 text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-950 hover:text-zinc-950 dark:border-line dark:bg-white/[0.03] dark:text-mist dark:hover:border-white dark:hover:text-white"
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
    >
      <Icon className="h-4 w-4 transition group-hover:scale-110" strokeWidth={1.7} />
    </a>
  );
}
