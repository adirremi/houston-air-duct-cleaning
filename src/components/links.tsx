import type { ReactNode } from "react";
import Link from "next/link";
import { telHref } from "@/data/locations";

const variants = {
  primary:
    "bg-teal text-paper hover:bg-teal-deep",
  ink: "bg-ink text-paper hover:bg-teal-deep",
  outline:
    "border border-line-strong bg-transparent text-ink hover:border-teal hover:text-teal",
  ghost: "text-ink underline-offset-4 hover:underline",
};

type Variant = keyof typeof variants;

export function PhoneLink({
  phone,
  variant = "primary",
  className = "",
  children,
}: {
  phone: string;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={telHref(phone)}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children ?? `Call ${phone}`}
    </a>
  );
}

export function MapLink({
  href,
  variant = "outline",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children ?? "Open map"}
    </a>
  );
}

export function PageLink({
  href,
  variant = "outline",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
