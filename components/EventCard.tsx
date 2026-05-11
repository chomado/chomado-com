import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { type SpeakingEvent } from "@/lib/events";

type Props = {
  event: SpeakingEvent;
};

export function EventCard({ event }: Props) {
  const formattedDate = new Date(event.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-row gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-[#0078d4]/40 hover:shadow-md hover:shadow-[#0078d4]/5 hover:-translate-y-0.5"
    >
      {/* Thumbnail - small square on the left */}
      <div className="relative shrink-0 w-28 h-20 rounded-lg overflow-hidden bg-muted">
        {event.ogImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={event.ogImage}
            alt={event.eventName}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0078d4]/10 to-purple-500/10">
            <span className="text-2xl">🎤</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <p className="text-xs font-medium text-[#0078d4] truncate">{event.eventName}</p>
        <h3 className="font-semibold text-sm text-foreground leading-snug group-hover:text-[#0078d4] transition-colors duration-200 line-clamp-2">
          {event.sessionTitle}
        </h3>

        {/* Date & Location */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted-foreground mt-auto">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {formattedDate}
          </span>
          {event.location && (
            <span className="flex items-center gap-1 truncate">
              <MapPin size={11} />
              {event.location}
            </span>
          )}
        </div>

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {event.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Arrow */}
      <div className="self-center text-muted-foreground group-hover:text-[#0078d4] transition-colors shrink-0">
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}
