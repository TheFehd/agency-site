"use client";

import { cn } from "@/lib/utils";

import "./competitor-table.css";

type CompetitorRow = {
  name: string;
  url?: string;
  tagline?: string;
  logo?: string;
  logoFit?: "wide" | "square";
  booking: string;
  payment: string;
  highlight?: boolean;
  negative?: boolean;
};

type CompetitorTableProps = {
  rows: readonly CompetitorRow[];
};

function domainFromUrl(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function StatusPill({
  label,
  positive,
}: {
  label: string;
  positive: boolean;
}) {
  return (
    <span
      className={cn(
        "lead-report-comp-pill",
        positive ? "lead-report-comp-pill--yes" : "lead-report-comp-pill--no",
      )}
    >
      <span className="lead-report-comp-pill__icon" aria-hidden>
        {positive ? "✓" : "✗"}
      </span>
      {label}
    </span>
  );
}

function FeatureCell({
  label,
  value,
  positive,
}: {
  label: string;
  value: string;
  positive: boolean;
}) {
  return (
    <div className="lead-report-comp-feature">
      <span className="lead-report-comp-feature__label">{label}</span>
      <StatusPill label={value} positive={positive} />
    </div>
  );
}

export function CompetitorTable({ rows }: CompetitorTableProps) {
  return (
    <div className="lead-report-comp-stage">
      <div className="lead-report-comp-cards">
        {rows.map((row) => {
          const negative = Boolean(row.negative);
          const highlight = Boolean(row.highlight);
          const domain = row.url ? domainFromUrl(row.url) : null;

          return (
            <article
              key={row.name}
              className={cn(
                "lead-report-glass lead-report-glass--hover lead-report-comp-card",
                highlight && "lead-report-glass--bad lead-report-comp-card--yours",
              )}
            >
              <div className="lead-report-glass__shine" aria-hidden />

              {row.logo ? (
                <div
                  className={cn(
                    "lead-report-comp-card__brand",
                    row.logoFit === "square" && "lead-report-comp-card__brand--square",
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={row.logo}
                    alt={`${row.name} logo`}
                    className={cn(
                      "lead-report-comp-card__logo",
                      row.logoFit === "square" && "lead-report-comp-card__logo--square",
                    )}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : null}

              <div className="lead-report-comp-card__content">
                <div className="lead-report-comp-card__identity">
                  {highlight ? (
                    <span className="lead-report-comp-card__badge">Your site</span>
                  ) : null}
                  <h3 className="lead-report-comp-card__title">{row.name}</h3>
                  {domain ? (
                    row.url ? (
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lead-report-comp-card__url"
                      >
                        {domain}
                      </a>
                    ) : (
                      <span className="lead-report-comp-card__url">{domain}</span>
                    )
                  ) : null}
                  {row.tagline ? (
                    <p className="lead-report-comp-card__tagline">{row.tagline}</p>
                  ) : null}
                </div>

                <div className="lead-report-comp-card__features">
                  <FeatureCell
                    label="Instant booking"
                    value={row.booking}
                    positive={!negative}
                  />
                  <FeatureCell
                    label="Pay online"
                    value={row.payment}
                    positive={!negative}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
